import { WindowWrapper } from '../window-wrapper'
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function ContactWindow() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subjectType: 'general',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle',
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // Simulate sending (replace with your actual API call)
    setTimeout(() => {
      setStatus('sent')
      setFormData({
        name: '',
        email: '',
        subjectType: 'general',
        subject: '',
        message: '',
      })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1500)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'hover:bg-gray-900',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:bg-blue-600',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com',
      color: 'hover:bg-sky-500',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:hello@example.com',
      color: 'hover:bg-red-500',
    },
  ]

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@example.com',
      href: 'mailto:hello@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
  ]

  return (
    <WindowWrapper
      windowType="contact"
      title="Contact Me"
      defaultWidth={900}
      defaultHeight={700}
      minWidth={700}
      minHeight={600}
    >
      <div className="h-full bg-gray-50 dark:bg-gray-900 overflow-auto">
        <div className="h-full flex">
          {/* Left Side - Contact Info & Profile */}
          <div className="w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-6 flex flex-col">
            {/* Profile Section */}
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-linear-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                A
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                Adrian
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Full Stack Developer
              </p>
              <div className="flex items-center justify-center gap-2 mt-3">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  Available for hire
                </span>
              </div>
            </div>

            {/* Contact Info List */}
            <div className="flex-1 space-y-1">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer group">
                    <Icon className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 transition-colors" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {item.label}
                      </p>
                      <p className="text-sm text-gray-900 dark:text-gray-100 truncate">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )

                return item.href ? (
                  <a key={index} href={item.href}>
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Connect
              </p>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 hover:text-white transition-all"
                      title={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Message Form */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <div className="px-8 py-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                New Message
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Send me a message and I'll get back to you as soon as possible.
              </p>
            </div>

            {/* Form */}
            <div className="flex-1 overflow-auto">
              <form onSubmit={handleSubmit} className="p-8 space-y-6 max-w-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider"
                    >
                      Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider"
                    >
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Subject Type
                  </label>
                  <Select
                    value={formData.subjectType}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, subjectType: value }))
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a subject type" />
                    </SelectTrigger>
                    <SelectContent className="z-9999">
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="project">
                        Project Collaboration
                      </SelectItem>
                      <SelectItem value="job">Job Opportunity</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="support">Support</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider"
                  >
                    Subject
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Brief description of your message"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="w-full px-3 py-2 border border-input rounded-md bg-transparent shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 text-sm dark:bg-input/30 placeholder:text-muted-foreground"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Button
                    type="submit"
                    disabled={status === 'sending'}
                    className="gap-2"
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : status === 'sent' ? (
                      <>
                        <span>✓</span>
                        Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {status === 'sent' && (
                    <span className="text-sm text-green-600 dark:text-green-400 animate-fade-in">
                      Message sent successfully!
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </WindowWrapper>
  )
}
