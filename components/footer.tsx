'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import Contact from '@/app/contact/contact'

export default function Footer() {
  const [telephone, setTelephone] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const form = useRef<HTMLFormElement>(null)

  const handleValidation = (value: string) => {
    const telephoneRegex = /^[0-9]{10,20}$/
    setIsValid(telephoneRegex.test(value))
  }
  const handleTelephoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    // Check if telephone is valid (only digits and length between 10 and 20)
    const telephoneRegex = /^[0-9]{10,20}$/

    if (!telephone) {
      console.log('Please enter a telephone number.')
    } else if (!telephoneRegex.test(telephone)) {
      setErrorMsg('Format de téléphone non valide')
    } else {
      console.log('Valid telephone number:', telephone)
      setIsValid(true)
      setErrorMsg('')
      // Proceed with form submission logic or API call
    }
    setTelephone(value)
    handleValidation(value)
  }
  const handleSendForm = () => {
    if (form.current) {
      const formData = new FormData(form.current)
      const telephone = formData.get('telephone')?.toString().trim()
      fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/emails/we_call_you_back_to_admin`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ telephone }),
        }
      )
      setSuccess(true)
    }
  }

  const handleAideClick = () => {
    setIsContactModalOpen(true)
  }

  const navigation = {
    social: [
      {
        name: 'Twitter',
        href: '#',
        icon: (props: any) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
      {
        name: 'Linkedin',
        href: '#',
        icon: (props: any) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M22.225 0H1.77C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.77 24h20.455C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.208 0 22.225 0zM7.412 20.834H3.56V9H7.412v11.834zM5.486 7.967c-1.273 0-2.302-1.02-2.302-2.28 0-1.265 1.029-2.28 2.302-2.28s2.302 1.02 2.302 2.28c0 1.265-1.029 2.28-2.302 2.28zm15.352 12.867h-3.852V14.16c0-1.594-.568-2.682-1.989-2.682-1.082 0-1.727.726-2.01 1.424-.104.253-.13.607-.13.96v7.972h-3.852V9h3.852v1.606c.513-.789 1.432-1.918 3.477-1.918 2.541 0 4.454 1.662 4.454 5.236v6.91z" />
          </svg>
        ),
      },
    ],
  }
  return (
    <>
      <footer>
        <div className="px-6 pb-6 pt-2 sm:pt-24 lg:px-8 lg:pt-8 relative z-20 mt-14">
          <div className="xl:grid xl:grid-cols-2 xl:gap-8">
            <section id="nav">
              <div className="hidden lg:flex h-full w-full items-start justify-center sm:justify-between">
                <div className="grid grid-cols-2 gap-8 xl:col-span-1">
                  <div className="flex flex-col gap-4 items-start justify-start">
                    <div className="flex flex-row gap-4 max-w-[300px]">
                      <div>
                        <h3 className="font-light text-white uppercase">
                          <Link
                            href="/presentation"
                            className="relative group text-sm transition-all duration-300 ease-out hover:text-white rounded-md px-3 py-2 overflow-hidden whitespace-nowrap inline-flex items-center uppercase h-[30px] mt-3"
                          >
                            <span className="relative z-10">présentation</span>
                            <div className="absolute inset-0 bg-[#B51B1B] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out origin-top"></div>
                            <div className="absolute inset-0 bg-[#B51B1B] opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out blur-sm"></div>
                          </Link>
                        </h3>
                      </div>
                      <div className="text-white flex items-center h-[30px] mt-3">|</div>
                      <div className="mt-10 md:mt-0">
                        <h3 className="font-light text-white uppercase">
                          <Link
                            href="/inspirations"
                            className="relative group text-sm transition-all duration-300 ease-out hover:text-white rounded-md px-3 py-2 overflow-hidden whitespace-nowrap inline-flex items-center uppercase h-[30px] mt-3"
                          >
                            <span className="relative z-10">Inspirations</span>
                            <div className="absolute inset-0 bg-[#B51B1B] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out origin-top"></div>
                            <div className="absolute inset-0 bg-[#B51B1B] opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out blur-sm"></div>
                          </Link>
                        </h3>
                      </div>
                      <div className="text-white flex items-center h-[30px] mt-3">|</div>
                      <div>
                        <h3 className="font-light text-white uppercase">
                          <Link
                            href="/faq"
                            className="relative group text-sm transition-all duration-300 ease-out hover:text-white rounded-md px-3 py-2 overflow-hidden whitespace-nowrap inline-flex items-center uppercase h-[30px] mt-3"
                          >
                            <span className="relative z-10">faq</span>
                            <div className="absolute inset-0 bg-[#B51B1B] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out origin-top"></div>
                            <div className="absolute inset-0 bg-[#B51B1B] opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out blur-sm"></div>
                          </Link>
                        </h3>
                      </div>
                      <div className="text-white flex items-center h-[30px] mt-3">|</div>
                      <div className="mt-10 md:mt-0">
                        <h3 className="font-light text-white uppercase">
                          <Link
                            href="/contact"
                            className="relative group text-sm transition-all duration-300 ease-out hover:text-white rounded-md px-3 py-2 overflow-hidden whitespace-nowrap inline-flex items-center uppercase h-[30px] mt-3"
                          >
                            <span className="relative z-10">contact</span>
                            <div className="absolute inset-0 bg-[#B51B1B] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out origin-top"></div>
                            <div className="absolute inset-0 bg-[#B51B1B] opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out blur-sm"></div>
                          </Link>
                        </h3>
                      </div>
                    </div>

                    <div className="text-white grid grid-cols-2 gap-8 ml-8 pt-4 place-items-center">
                      <Link href="https://gedimat.fr" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/images/footer/gedimat.jpg"
                          width={272}
                          height={70}
                          alt="Gedimat"
                          className="cursor-pointer"
                        ></Image>
                      </Link>

                      <Image
                        src="/images/footer/pliage.jpg"
                        width={148}
                        height={70}
                        alt="Gedimat"
                        className="cursor-pointer"
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="telephone">
              <div className="mt-10 xl:mt-0">
                <div className="flex flex-col sm:flex-row gap-2 justify-between items-center">
                  {/* Image - appears first on mobile, second on desktop */}
                  <div className="order-1 sm:order-2 -mt-28 sm:-mt-28 pl-14 sm:pl-0">
                    <Image
                      src="/images/footer/aide.png"
                      alt="helper"
                      width={220}
                      height={147}
                      className="cursor-pointer hover:scale-105 transition-transform duration-200"
                      onClick={handleAideClick}
                    ></Image>
                  </div>
                  {/* Text - appears second on mobile, first on desktop */}
                  <div className="order-2 sm:order-1">
                    <h3 className="text-normal leading-6 text-white text-center sm:text-left">
                      On vous rappelle
                    </h3>
                    <p className="text-sm pt-1 text-gray-500 text-center sm:text-left">
                      Un de nos experts prendra contact avec vous
                    </p>
                  </div>
                </div>

                {!success ? (
                  <form ref={form} className="mt-6 sm:flex sm:max-w-md">
                    <input
                      type="text"
                      name="telephone"
                      id="telephone"
                      required
                      onChange={handleTelephoneChange}
                      className="w-full focus:outline-none min-w-0 text-center appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-[#B51B1B] sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                      placeholder="Téléphone"
                    />
                    <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                      <button
                        onClick={handleSendForm}
                        type="button"
                        disabled={!isValid}
                        className={`flex w-full items-center justify-center rounded-md px-3 py-2 text-sm font-light text-white shadow-sm uppercase ${isValid
                          ? 'bg-[#B51B1B] hover:bg-[#B51B1B]'
                          : 'bg-gray-400 cursor-not-allowed'
                          }`}
                      >
                        Envoyer
                      </button>
                    </div>
                  </form>
                ) : (
                  // success msg
                  <div className="mt-6 flex justify-left items-center mx-auto text-white">
                    Merci, un de nos experts vous recontactera.
                  </div>
                )}
                {!isValid && telephone !== '' ? (
                  <div className="text-sm text-gray-500 pt-4">{errorMsg}</div>
                ) : (
                  <div></div>
                )}
              </div>
            </section>
          </div>
          <div className="mt-16 pt-4 border-t border-white/10 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
            <div className="flex space-x-6 justify-center sm:justify-start md:order-2">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="text-gray-500 hover:text-gray-400"
                >
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0 sm:text-left text-center">
              &copy; Pliage de la Vallée 2025 |<span> Droits réservés |</span>
              <span className="hover:text-white">
                <Link href="/cgv"> Mentions légales</Link>
              </span>
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <Dialog open={isContactModalOpen} onOpenChange={setIsContactModalOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Contactez-nous
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <Contact />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
