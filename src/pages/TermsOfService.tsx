import React from 'react'
import { FileText } from 'lucide-react'

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-uber-green flex items-center">
        <FileText className="mr-2" size={32} />
        Terms of Service
      </h1>
      
      <div className="space-y-6 text-gray-300">
        <p>
          Welcome to TrackMyDrive. By using our platform, you agree to comply with and be bound by the following terms and conditions. Please read these carefully before using our services.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-uber-green">1. Acceptance of Terms</h2>
        <p>
          By accessing or using TrackMyDrive, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-uber-green">2. User Accounts</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-uber-green">3. Service Usage</h2>
        <p>
          You agree to use TrackMyDrive only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the platform.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-uber-green">4. Intellectual Property</h2>
        <p>
          The content, organization, graphics, design, and other matters related to TrackMyDrive are protected under applicable copyrights and other proprietary laws. The copying, redistribution, use, or publication by you of any such matters or any part of the platform is strictly prohibited.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-uber-green">5. Limitation of Liability</h2>
        <p>
          TrackMyDrive shall not be liable for any direct, indirect, incidental, consequential, or exemplary damages resulting from your use or inability to use the platform or for the cost of procurement of substitute services.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-uber-green">6. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms of Service at any time. We will notify users of any significant changes. Your continued use of TrackMyDrive after changes to the Terms of Service constitutes your acceptance of the new terms.
        </p>

        <p className="mt-8 text-sm text-gray-400">
          Last updated: May 15, 2023
        </p>
      </div>
    </div>
  )
}

export default TermsOfService