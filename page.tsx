import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"

export default function Home() {
  // Replace with your WhatsApp number and message
  const phoneNumber = "+5491164816092"
  const message = "Hola, quiero un usuario!"
  const whatsappLink = `https://wa.me/${+5491164816092}?text=${encodeURIComponent(message)}`

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-4 text-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image src="/placeholder.svg?height=1080&width=1920" alt="Background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="max-w-3xl space-y-8 text-white">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">BIUENVENIDO A GANAMOS</h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl">We provide amazing services that will help you achieve your goals.</p>

        {/* Additional Text */}
        <p className="text-lg">Contact us today to learn more about how we can help you.</p>

        {/* WhatsApp Button */}
        <div className="pt-4">
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-lg font-medium text-white transition-all hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <Phone className="h-5 w-5" />
            Contact via WhatsApp
          </Link>
        </div>
      </div>
    </main>
  )
}

