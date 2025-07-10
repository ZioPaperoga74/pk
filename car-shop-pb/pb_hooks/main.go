package main

import (
	"log"
	"regexp"

	"car-shop-pb/utils"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/tools/template"
)

func main() {
	app := pocketbase.New()

	
	app.OnMailerRecordPasswordResetSend().BindFunc(func(e *core.MailerRecordEvent) error {
		
		user := e.Record
		
		
		resetURL := extractResetURL(e.Message.HTML)
		
		
		templateData := utils.GetDefaultResetPasswordData(
			user.GetString("name"), 
			resetURL,
		)
		
		
		registry := template.NewRegistry()
		
		
		html, err := registry.LoadFiles(
			"views/base.html",
			"views/reset_password.html",
		).Render(map[string]any{
			"title":           templateData.Title,
			"header_title":    templateData.HeaderTitle,
			"header_subtitle": templateData.HeaderSubtitle,
			"footer_text":     templateData.FooterText,
			"footer_link":     templateData.FooterLink,
			"footer_link_text": templateData.FooterLinkText,
			"user_name":       templateData.UserName,
			"reset_url":       templateData.ResetURL,
		})
		
		if err != nil {
			log.Printf("Errore nel rendering del template email: %v", err)
			
			return nil
		}
		
		
		e.Message.HTML = html
		e.Message.Subject = templateData.Title
		
		return e.Next()
	})

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}


func extractResetURL(htmlContent string) string {
	
	re := regexp.MustCompile(`href="([^"]*reset[^"]*)"`)
	matches := re.FindStringSubmatch(htmlContent)
	if len(matches) > 1 {
		return matches[1]
	}
	
	
	return "https://your-domain.com/reset-password?token=YOUR_TOKEN"
} 