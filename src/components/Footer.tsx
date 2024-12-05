import { Logo } from '../assets/logo';

export function Footer() {
  return (
    <footer className="bg-dark-300 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Logo className="h-8 w-auto text-primary mb-4" />
            <p className="mt-4 text-gray-400">
              Build your own Pade community.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="https://training.padespace.io/privacy-policy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://training.padespace.io/terms-of-service/" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-2">
              <li>office@padespace.io</li>
              <li>
                <a 
                  href="https://www.instagram.com/padespace/" 
                  className="hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-dark-400 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} PADE LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}