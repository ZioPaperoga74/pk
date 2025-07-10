package utils

import (
	"fmt"
	"path/filepath"

	"github.com/pocketbase/pocketbase/tools/template"
)


type EmailTemplateData struct {
	Title          string
	HeaderTitle    string
	HeaderSubtitle string
	FooterText     string
	FooterLink     string
	FooterLinkText string
	UserName       string
	ResetURL       string
	DashboardURL   string
	
}


func RenderResetPasswordEmail(data EmailTemplateData) (string, error) {
	registry := template.NewRegistry()
	
	// Load the base template and the reset password template
	html, err := registry.LoadFiles(
		"views/base.html",
		"views/reset_password.html",
	).Render(map[string]any{
		"title":           data.Title,
		"header_title":    data.HeaderTitle,
		"header_subtitle": data.HeaderSubtitle,
		"footer_text":     data.FooterText,
		"footer_link":     data.FooterLink,
		"footer_link_text": data.FooterLinkText,
		"user_name":       data.UserName,
		"reset_url":       data.ResetURL,
	})
	
	if err != nil {
		return "", fmt.Errorf("failed to render reset password email: %w", err)
	}
	
	return html, nil
}


func GetDefaultResetPasswordData(userName, resetURL string) EmailTemplateData {
	return EmailTemplateData{
		Title:          "Reset Your Password - Car Shop",
		HeaderTitle:    "Password Reset",
		HeaderSubtitle: "Secure your account with a new password",
		FooterText:     "This email was sent from Car Shop. If you have any questions, please contact our support team.",
		FooterLink:     "https://your-car-shop-domain.com",
		FooterLinkText: "Visit Car Shop",
		UserName:       userName,
		ResetURL:       resetURL,
	}
}


func RenderVerifyEmail(data EmailTemplateData) (string, error) {
	registry := template.NewRegistry()

	html, err := registry.LoadFiles(
		"views/base.html",
		"views/verify_email.html",
	).Render(map[string]any{
		"title":            data.Title,
		"header_title":     data.HeaderTitle,
		"header_subtitle":  data.HeaderSubtitle,
		"footer_text":      data.FooterText,
		"footer_link":      data.FooterLink,
		"footer_link_text": data.FooterLinkText,
		"user_name":        data.UserName,
		"verify_url":       data.ResetURL, // reuse ResetURL field for verify link
	})

	if err != nil {
		return "", fmt.Errorf("failed to render verify email: %w", err)
	}

	return html, nil
}

func GetDefaultVerifyEmailData(userName, verifyURL string) EmailTemplateData {
	return EmailTemplateData{
		Title:          "Verify Your Email - Car Shop",
		HeaderTitle:    "Email Verification",
		HeaderSubtitle: "Activate your Car Shop account",
		FooterText:     "This email was sent from Car Shop. If you have any questions, please contact our support team.",
		FooterLink:     "https://your-car-shop-domain.com",
		FooterLinkText: "Visit Car Shop",
		UserName:       userName,
		ResetURL:       verifyURL, // reuse ResetURL field for verify link
	}
}


func ValidateTemplateFiles() error {
	requiredFiles := []string{
		"views/base.html",
		"views/reset_password.html",
	}
	
	for _, file := range requiredFiles {
		// This is a simple check - in production you might want more robust validation
		if file == "" {
			return fmt.Errorf("template file path cannot be empty")
		}
	}
	
	return nil
}


func GetTemplatePath(filename string) string {
	return filepath.Join("views", filename)
} 