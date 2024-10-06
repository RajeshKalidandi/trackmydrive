import React from 'react'
import { Shield } from 'lucide-react'

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-uber-green flex items-center">
        <Shield className="mr-2" size={32} />
        Privacy Policy
      </h1>
      
      <div className="space-y-6 text-gray-300">
        <p>
          At TrackMyDrive, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our platform.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-uber-green">Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Personal information (name, email address, phone number)</li>
          <li>Driving lesson data (schedules, progress, achievements)</li>
          <li>Payment information (processed securely through third-party providers)</li>
          <li>Usage data (how you interact with our platform)</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-uber-green">How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>To provide and improve our services</li>
          <li>To communicate with you about your account and lessons</li>
          <li>To analyze usage patterns and enhance user experience</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-uber-green">Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-uber-green">Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information. You may also request a copy of the data we hold about you. To exercise these rights, please contact us at privacy@trackmydrive.com.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-uber-green">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
        </p>

        <p className="mt-8 text-sm text-gray-400">
          Last updated: May 15, 2023
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy