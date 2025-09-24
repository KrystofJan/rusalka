'use client';

import React, { useState } from 'react';
import {
  Container,
  Card,
  Badge,
  Alert,
  Separator,
  TooltipProvider,
  Button,
  // Form validation components
  Form,
  FormFieldConnector,
  FormSubmitButton,
  ValidatedInput,
  ValidatedTextarea,
  ValidatedSelect,
  // Validation utilities
  formSchemas,
  useFormValidation,
  type ContactFormData,
  type UserRegistrationData,
} from '@rusalka/ui';

export default function ZodFormsDemo() {
  const [submittedData, setSubmittedData] = useState<any>(null);
  const [activeForm, setActiveForm] = useState<'contact' | 'registration'>('contact');

  // Contact form initial data
  const contactInitialData: ContactFormData = {
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
  };

  // Registration form initial data
  const registrationInitialData: UserRegistrationData = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    dateOfBirth: undefined,
    agreeToTerms: false,
  };

  const handleContactSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmittedData({ type: 'contact', data });
  };

  const handleRegistrationSubmit = async (data: UserRegistrationData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmittedData({ type: 'registration', data });
  };

  const subjectOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'support', label: 'Technical Support' },
    { value: 'sales', label: 'Sales Question' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'feedback', label: 'Feedback' },
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-brand-bg text-brand-fg">
        <Container size="2xl" className="py-8">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-brand-fg">
                Zod Form Validation Demo
              </h1>
              <p className="text-xl text-brand-subtext1 max-w-3xl mx-auto">
                Comprehensive form validation using Zod schemas with type-safe validation, 
                real-time error handling, and seamless integration with @rusalka/ui components.
              </p>
              <div className="flex justify-center space-x-2">
                <Badge variant="default">Zod Validation</Badge>
                <Badge variant="success">Type Safe</Badge>
                <Badge variant="secondary">Real-time</Badge>
                <Badge variant="outline">Schema-based</Badge>
              </div>
            </div>

            {/* Form Selector */}
            <div className="flex justify-center space-x-4">
              <Button
                variant={activeForm === 'contact' ? 'primary' : 'outline'}
                onClick={() => setActiveForm('contact')}
              >
                Contact Form
              </Button>
              <Button
                variant={activeForm === 'registration' ? 'primary' : 'outline'}
                onClick={() => setActiveForm('registration')}
              >
                Registration Form
              </Button>
            </div>

            {/* Success Alert */}
            {submittedData && (
              <Alert
                variant="success"
                title="Form Submitted Successfully!"
                dismissible
                onDismiss={() => setSubmittedData(null)}
              >
                <div className="space-y-2">
                  <p>Your {submittedData.type} form has been validated and submitted.</p>
                  <details className="text-xs">
                    <summary className="cursor-pointer font-medium">View submitted data</summary>
                    <pre className="mt-2 p-2 bg-brand-surface-secondary rounded text-xs overflow-auto">
                      {JSON.stringify(submittedData.data, null, 2)}
                    </pre>
                  </details>
                </div>
              </Alert>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                {activeForm === 'contact' ? (
                  <Card>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold text-brand-fg">Contact Form</h2>
                        <Badge variant="outline">Zod Schema</Badge>
                      </div>

                      <Form
                        schema={formSchemas.contactForm}
                        initialData={contactInitialData}
                        onSubmit={handleContactSubmit}
                        validationOptions={{
                          validateOnChange: true,
                          validateOnBlur: true,
                          debounceMs: 300,
                        }}
                        layout="vertical"
                        spacing="md"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormFieldConnector name="firstName">
                            {(props) => (
                              <ValidatedInput
                                {...props}
                                label="First Name"
                                required
                                placeholder="Enter your first name"
                                onChange={(e) => props.onChange(e.target.value)}
                              />
                            )}
                          </FormFieldConnector>

                          <FormFieldConnector name="lastName">
                            {(props) => (
                              <ValidatedInput
                                {...props}
                                label="Last Name"
                                required
                                placeholder="Enter your last name"
                                onChange={(e) => props.onChange(e.target.value)}
                              />
                            )}
                          </FormFieldConnector>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormFieldConnector name="email">
                            {(props) => (
                              <ValidatedInput
                                {...props}
                                type="email"
                                label="Email Address"
                                required
                                placeholder="Enter your email"
                                onChange={(e) => props.onChange(e.target.value)}
                              />
                            )}
                          </FormFieldConnector>

                          <FormFieldConnector name="phone">
                            {(props) => (
                              <ValidatedInput
                                {...props}
                                type="tel"
                                label="Phone Number"
                                placeholder="Enter your phone number"
                                description="Optional - for phone contact preference"
                                onChange={(e) => props.onChange(e.target.value)}
                              />
                            )}
                          </FormFieldConnector>
                        </div>

                        <FormFieldConnector name="company">
                          {(props) => (
                            <ValidatedInput
                              {...props}
                              label="Company"
                              placeholder="Enter your company name"
                              description="Optional"
                              onChange={(e) => props.onChange(e.target.value)}
                            />
                          )}
                        </FormFieldConnector>

                        <FormFieldConnector name="subject">
                          {(props) => (
                            <ValidatedSelect
                              {...props}
                              label="Subject"
                              required
                              placeholder="Select a subject"
                              options={subjectOptions}
                              onValueChange={props.onChange}
                            />
                          )}
                        </FormFieldConnector>

                        <FormFieldConnector name="message">
                          {(props) => (
                            <ValidatedTextarea
                              {...props}
                              label="Message"
                              required
                              placeholder="Enter your message..."
                              rows={4}
                              description="Minimum 10 characters"
                              onChange={(e) => props.onChange(e.target.value)}
                            />
                          )}
                        </FormFieldConnector>

                        <div className="flex space-x-4">
                          <FormSubmitButton
                            disableWhenInvalid={true}
                            loadingText="Sending..."
                          >
                            Send Message
                          </FormSubmitButton>
                          <Button type="button" variant="outline">
                            Reset Form
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </Card>
                ) : (
                  <Card>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold text-brand-fg">User Registration</h2>
                        <Badge variant="outline">Complex Validation</Badge>
                      </div>

                      <Form
                        schema={formSchemas.userRegistration}
                        initialData={registrationInitialData}
                        onSubmit={handleRegistrationSubmit}
                        validationOptions={{
                          validateOnChange: true,
                          validateOnBlur: true,
                          debounceMs: 500,
                        }}
                        layout="vertical"
                        spacing="md"
                      >
                        <FormFieldConnector name="username">
                          {(props) => (
                            <ValidatedInput
                              {...props}
                              label="Username"
                              required
                              placeholder="Choose a username"
                              description="3-20 characters, letters, numbers, and underscores only"
                              onChange={(e) => props.onChange(e.target.value)}
                            />
                          )}
                        </FormFieldConnector>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormFieldConnector name="firstName">
                            {(props) => (
                              <ValidatedInput
                                {...props}
                                label="First Name"
                                required
                                placeholder="Enter your first name"
                                onChange={(e) => props.onChange(e.target.value)}
                              />
                            )}
                          </FormFieldConnector>

                          <FormFieldConnector name="lastName">
                            {(props) => (
                              <ValidatedInput
                                {...props}
                                label="Last Name"
                                required
                                placeholder="Enter your last name"
                                onChange={(e) => props.onChange(e.target.value)}
                              />
                            )}
                          </FormFieldConnector>
                        </div>

                        <FormFieldConnector name="email">
                          {(props) => (
                            <ValidatedInput
                              {...props}
                              type="email"
                              label="Email Address"
                              required
                              placeholder="Enter your email"
                              onChange={(e) => props.onChange(e.target.value)}
                            />
                          )}
                        </FormFieldConnector>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormFieldConnector name="password">
                            {(props) => (
                              <ValidatedInput
                                {...props}
                                type="password"
                                label="Password"
                                required
                                placeholder="Create a password"
                                description="Min 8 chars, uppercase, lowercase, number"
                                onChange={(e) => props.onChange(e.target.value)}
                              />
                            )}
                          </FormFieldConnector>

                          <FormFieldConnector name="confirmPassword">
                            {(props) => (
                              <ValidatedInput
                                {...props}
                                type="password"
                                label="Confirm Password"
                                required
                                placeholder="Confirm your password"
                                onChange={(e) => props.onChange(e.target.value)}
                              />
                            )}
                          </FormFieldConnector>
                        </div>

                        <div className="flex space-x-4">
                          <FormSubmitButton
                            disableWhenInvalid={true}
                            loadingText="Creating Account..."
                          >
                            Create Account
                          </FormSubmitButton>
                          <Button type="button" variant="outline">
                            Reset Form
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Validation Features */}
                <Card>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-brand-fg">Validation Features</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-brand-success" />
                        <span className="text-brand-subtext1">Real-time validation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-brand-success" />
                        <span className="text-brand-subtext1">Type-safe schemas</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-brand-success" />
                        <span className="text-brand-subtext1">Custom error messages</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-brand-success" />
                        <span className="text-brand-subtext1">Debounced validation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-brand-success" />
                        <span className="text-brand-subtext1">Cross-field validation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-brand-success" />
                        <span className="text-brand-subtext1">Conditional validation</span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Schema Info */}
                <Card>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-brand-fg">Schema Validation</h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-brand-subtext1">
                        Forms use Zod schemas for comprehensive validation:
                      </p>
                      <ul className="space-y-1 text-xs text-brand-subtext2">
                        <li>• Email format validation</li>
                        <li>• Password strength requirements</li>
                        <li>• Phone number format checking</li>
                        <li>• Required field validation</li>
                        <li>• String length constraints</li>
                        <li>• Custom validation rules</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* Code Example */}
                <Card>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-brand-fg">Usage Example</h3>
                    <div className="text-xs bg-brand-surface-secondary p-3 rounded overflow-auto">
                      <pre className="text-brand-subtext1">
{`import { 
  Form, 
  formSchemas,
  ValidatedInput 
} from '@rusalka/ui';

<Form
  schema={formSchemas.contactForm}
  initialData={initialData}
  onSubmit={handleSubmit}
  validationOptions={{
    validateOnChange: true,
    debounceMs: 300
  }}
>
  <ValidatedInput
    name="email"
    label="Email"
    required
  />
</Form>`}
                      </pre>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </TooltipProvider>
  );
}
