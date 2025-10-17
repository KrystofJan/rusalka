'use client';

import React, { useState } from 'react';
import {
  Button,
  Card,
  Input,
  Textarea,
  Select,
  Checkbox,
  RadioGroup,
  Alert,
  Badge,
  Progress,
  Container,
  Separator,
  TooltipProvider,
  Tooltip,
} from '@rusalka/ui';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    priority: 'medium',
    contactMethod: 'email',
    newsletter: false,
    terms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitProgress, setSubmitProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const subjectOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'support', label: 'Technical Support' },
    { value: 'sales', label: 'Sales Question' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'feedback', label: 'Feedback' },
  ];

  const priorityOptions = [
    { value: 'low', label: 'Low Priority' },
    { value: 'medium', label: 'Medium Priority' },
    { value: 'high', label: 'High Priority' },
    { value: 'urgent', label: 'Urgent' },
  ];

  const contactMethodOptions = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone Call' },
    { value: 'both', label: 'Either Email or Phone' },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    if (!formData.terms) {
      newErrors.terms = 'You must accept the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitProgress(0);

    // Simulate form submission with progress
    const progressInterval = setInterval(() => {
      setSubmitProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsSubmitting(false);
          setShowSuccess(true);
          // Reset form
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            company: '',
            subject: '',
            message: '',
            priority: 'medium',
            contactMethod: 'email',
            newsletter: false,
            terms: false,
          });
          return 100;
        }
        return prev + 20;
      });
    }, 300);
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return <Badge variant="destructive" size="sm">Urgent</Badge>;
      case 'high':
        return <Badge variant="warning" size="sm">High</Badge>;
      case 'medium':
        return <Badge variant="default" size="sm">Medium</Badge>;
      case 'low':
        return <Badge variant="outline" size="sm">Low</Badge>;
      default:
        return null;
    }
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-brand-bg text-brand-fg py-8">
        <Container size="lg">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-brand-fg">Contact Us</h1>
              <p className="text-xl text-brand-subtext1 max-w-2xl mx-auto">
                Get in touch with our team. We'd love to hear from you and will respond as soon as possible.
              </p>
            </div>

            {/* Success Alert */}
            {showSuccess && (
              <Alert
                variant="success"
                title="Message Sent Successfully!"
                dismissible
                onDismiss={() => setShowSuccess(false)}
              >
                Thank you for contacting us. We'll get back to you within 24 hours.
              </Alert>
            )}

            {/* Main Form */}
            <Card>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-brand-fg">Send us a message</h2>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-brand-subtext1">Priority:</span>
                    {getPriorityBadge(formData.priority)}
                  </div>
                </div>

                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-brand-fg">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-fg">
                        First Name *
                      </label>
                      <Input
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        variant={errors.firstName ? "error" : "default"}
                      />
                      {errors.firstName && (
                        <p className="text-sm text-brand-error">{errors.firstName}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-fg">
                        Last Name *
                      </label>
                      <Input
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        variant={errors.lastName ? "error" : "default"}
                      />
                      {errors.lastName && (
                        <p className="text-sm text-brand-error">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-fg">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        variant={errors.email ? "error" : "default"}
                      />
                      {errors.email && (
                        <p className="text-sm text-brand-error">{errors.email}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-fg">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-brand-fg">
                      Company (Optional)
                    </label>
                    <Input
                      placeholder="Enter your company name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <Separator />

                {/* Message Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-brand-fg">Message Details</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-fg">
                        Subject *
                      </label>
                      <Select
                        options={subjectOptions}
                        value={formData.subject}
                        onValueChange={(value) => setFormData({ ...formData, subject: value })}
                        placeholder="Select a subject"
                        variant={errors.subject ? "error" : "default"}
                      />
                      {errors.subject && (
                        <p className="text-sm text-brand-error">{errors.subject}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-fg">
                        Priority Level
                      </label>
                      <Select
                        options={priorityOptions}
                        value={formData.priority}
                        onValueChange={(value) => setFormData({ ...formData, priority: value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-brand-fg">
                      Message *
                    </label>
                    <Textarea
                      placeholder="Enter your message here..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      variant={errors.message ? "error" : "default"}
                    />
                    {errors.message && (
                      <p className="text-sm text-brand-error">{errors.message}</p>
                    )}
                  </div>
                </div>

                <Separator />

                {/* Contact Preferences */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-brand-fg">Contact Preferences</h3>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-brand-fg">
                      Preferred Contact Method
                    </label>
                    <RadioGroup
                      options={contactMethodOptions}
                      value={formData.contactMethod}
                      onValueChange={(value) => setFormData({ ...formData, contactMethod: value })}
                      orientation="horizontal"
                    />
                  </div>

                  <div className="space-y-3">
                    <Checkbox
                      id="newsletter"
                      label="Subscribe to our newsletter for updates and news"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => 
                        setFormData({ ...formData, newsletter: checked as boolean })
                      }
                    />

                    <Checkbox
                      id="terms"
                      label="I agree to the terms and conditions and privacy policy *"
                      checked={formData.terms}
                      onCheckedChange={(checked) => 
                        setFormData({ ...formData, terms: checked as boolean })
                      }
                      variant={errors.terms ? "error" : "default"}
                    />
                    {errors.terms && (
                      <p className="text-sm text-brand-error">{errors.terms}</p>
                    )}
                  </div>
                </div>

                {/* Submission Progress */}
                {isSubmitting && (
                  <div className="space-y-2">
                    <Progress 
                      value={submitProgress} 
                      label="Sending message..." 
                      showValue 
                    />
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex space-x-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="flex-1"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </Button>
                  
                  <Tooltip content="Clear all form fields">
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => {
                        setFormData({
                          firstName: '',
                          lastName: '',
                          email: '',
                          phone: '',
                          company: '',
                          subject: '',
                          message: '',
                          priority: 'medium',
                          contactMethod: 'email',
                          newsletter: false,
                          terms: false,
                        });
                        setErrors({});
                      }}
                      disabled={isSubmitting}
                    >
                      Clear Form
                    </Button>
                  </Tooltip>
                </div>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card size="sm">
                <div className="text-center space-y-2">
                  <div className="text-2xl">📧</div>
                  <div className="font-semibold text-brand-fg">Email</div>
                  <div className="text-sm text-brand-subtext1">contact@rusalka.dev</div>
                </div>
              </Card>
              
              <Card size="sm">
                <div className="text-center space-y-2">
                  <div className="text-2xl">📞</div>
                  <div className="font-semibold text-brand-fg">Phone</div>
                  <div className="text-sm text-brand-subtext1">+1 (555) 123-4567</div>
                </div>
              </Card>
              
              <Card size="sm">
                <div className="text-center space-y-2">
                  <div className="text-2xl">💬</div>
                  <div className="font-semibold text-brand-fg">Live Chat</div>
                  <div className="text-sm text-brand-subtext1">Available 9AM-5PM EST</div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    </TooltipProvider>
  );
}
