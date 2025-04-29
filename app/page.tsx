import Image from "next/image"
import { ArrowRight, ChefHat, Users, Calendar, UtensilsCrossed, Linkedin, Globe} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative text-cream py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Blurred Background */}
      <div className="absolute inset-0 bg-[url('/gallery/image1.jpg')] bg-cover bg-center bg-no-repeat blur-sm brightness-75 z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold">
              Exquisite Catering for Your Special Moments
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Elevate your events with our premium catering services. From intimate gatherings to grand celebrations,
              we bring culinary excellence to your table.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contacts">
              <Button className="bg-cream text-olive-green hover:bg-cream/50 text-lg px-6 py-6">
                Book Consultation
              </Button>
              </a>
              <a href="#menu">
              <Button
                variant="outline"
                className="border-cream bg-cream text-olive-green hover:bg-cream/50 text-lg px-6 py-6"
              >
                View Menu
              </Button>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image src="/images/logo.png" alt="Caza Mia Logo" fill className="object-contain" priority />
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-cream">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-olive-green mb-4">Our Catering Services</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We offer a wide range of catering services tailored to meet your specific needs and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-olive-green/10 rounded-full flex items-center justify-center mb-6">
                <ChefHat className="w-8 h-8 text-olive-green" />
              </div>
              <h3 className="text-xl font-bold text-olive-green mb-3">Corporate Events</h3>
              <p className="text-gray-700 mb-4">
                Impress your clients and colleagues with our professional catering services for meetings, conferences,
                and corporate gatherings.
              </p>
              <Link href="#" className="inline-flex items-center text-olive-green font-medium">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-olive-green/10 rounded-full flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-olive-green" />
              </div>
              <h3 className="text-xl font-bold text-olive-green mb-3">Weddings & Celebrations</h3>
              <p className="text-gray-700 mb-4">
                Make your special day memorable with our exquisite wedding catering services, from intimate ceremonies
                to grand receptions.
              </p>
              <Link href="#" className="inline-flex items-center text-olive-green font-medium">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-olive-green/10 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-olive-green" />
              </div>
              <h3 className="text-xl font-bold text-olive-green mb-3">Private Parties</h3>
              <p className="text-gray-700 mb-4">
                From birthday parties to anniversary celebrations, we provide personalized catering solutions for all
                your private events.
              </p>
              <Link href="#" className="inline-flex items-center text-olive-green font-medium">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-20 px-4 md:px-6 lg:px-8 bg-olive-green/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-olive-green mb-4">Menu Highlights</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore our signature dishes crafted with the finest ingredients and culinary expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "South Indian Dishes",
                description: "Traditional Kerala cuisine featuring rice, fish curries, beef fry, and authentic dishes.",
                
              },
              {
                name: "Continental Platter",
                description: "A selection of European delicacies including pastas, roasts, and gourmet salads.",
                
              },
              {
                name: "Arabic Mezzeh",
                description: "Assortment of Middle Eastern appetizers, grills, and traditional breads.",
                
              },
              {
                name: "Chinese Delights",
                description: "A variety of Chinese dishes including stir-fries, fried rice, noodles, chilli chicken, chilli beef (Veg also available).",
                
              },
              {
                name: "North Indian Feast",
                description:
                  "Rich and flavorful North Indian dishes including biryanis, curries, and tandoor specialties.",
                
              },
              {
                name: "Seafood Special",
                description: "Fresh seafood prepared in Kerala style with authentic spices and coconut.",
                
              },
              {
                name: "Dessert Collection",
                description: "Assortment of traditional and international desserts to satisfy your sweet cravings.",
                
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-olive-green/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-olive-green">{item.name}</h3>
                  <UtensilsCrossed className="w-5 h-5 text-olive-green" />
                </div>
                <p className="text-gray-700 mb-4">{item.description}</p>
                {/* <div className="text-olive-green font-semibold">{item.price}</div> */}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            {/* <Button className="bg-olive-green hover:bg-olive-green/90 text-cream">View Full Menu</Button> */}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-cream">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-olive-green mb-4">Gallery</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Browse through our portfolio of exquisite catering setups and culinary creations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Wedding Reception", category: "Wedding" },
              { title: "Corporate Lunch", category: "Corporate" },
              { title: "Birthday Celebration", category: "Private Party" },
              { title: "Anniversary Dinner", category: "Private Party" },
              { title: "Product Launch", category: "Corporate" },
              { title: "Decoration", category: "Event" }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={`/gallery/image${index + 1}.jpg`}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-olive-green/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-cream">{item.title}</h3>
                    <p className="text-cream/80">{item.category}</p>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-olive-green group-hover:text-olive-green/80 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-olive-green hover:bg-olive-green/90 text-cream">View More Photos</Button>
          </div>
        </div>
      </section>

      {/* food prepration */}

      <section className="py-20 px-4 md:px-6 lg:px-8 bg-olive-green/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-olive-green mb-4">Food Prepration</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Browse through our food prepration setups and culinary creations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "", category: "" },
              { title: "", category: "" },
              { title: "", category: "" },
              { title: "", category: "" },
              { title: "", category: "" },
              { title: "", category: "" }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/4] relative overflow-hidden">
                  <Image
                    src={`/foodPrep/image${index + 1}.jpg`}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* <div className="absolute inset-0 bg-olive-green/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-cream">{item.title}</h3>
                    <p className="text-cream/80">{item.category}</p>
                  </div> */}
                </div>
                {/* <div className="p-4 bg-white">
                  <h3 className="font-bold text-olive-green group-hover:text-olive-green/80 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.category}</p>
                </div> */}
              </div>
            ))}
          </div>

          
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-cream">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-olive-green mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sojo Thomas",
                event: "Wedding Reception",
                quote:
                  "Caza Mia exceeded our expectations! The food was exceptional and the service was impeccable. Our guests couldn't stop raving about the delicious spread.",
              },
              {
                name: "Alwin Toms",
                event: "Corporate Event",
                quote:
                  "Professional service from start to finish. The team at Caza Mia understood our requirements perfectly and delivered a memorable experience for our annual conference.",
              },
              {
                name: "Anu Mathew",
                event: "Birthday Celebration",
                quote:
                  "The attention to detail was remarkable. From presentation to taste, everything was perfect.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold text-olive-green">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section  id="contacts" className="py-20 px-4 md:px-6 lg:px-8 bg-olive-green text-cream">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Get in Touch</h2>
              <p className="text-lg mb-8 opacity-90">
                Ready to elevate your event with our catering services? Contact us today to discuss your requirements
                and get a customized quote.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 mt-1 flex-shrink-0"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    {/* <p>+91 9539281580, 9746783130</p> */}

                    <p>
  <a
    href="https://wa.me/919539281580"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline text-cream/90"
  >
    +91 9539281580
  </a>
  
</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 mt-1 flex-shrink-0"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p>cazamia988@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 mt-1 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg">Website</h3>
                    <p>www.cazamiacateresevent.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 mt-1 flex-shrink-0"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg">Location</h3>
                    <p>Changanacherry, Ernakulam</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-cream/20 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/cazamia_808841/"
                    className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-cream/20 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                      href="https://wa.me/919539281580"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-cream/20 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 448 512"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M380.9 97.1C339.3 55.5 282.6 32 224 32 100.3 32 0 132.3 0 256c0 45 11.9 88.7 34.5 127.1L0 480l100.6-33.3C137.4 469 180.3 480 224 480c123.7 0 224-100.3 224-224 0-58.6-23.5-115.3-67.1-158.9zM224 438.6c-38.6 0-76.4-10.4-109.3-30l-7.8-4.6-59.8 19.8 20.3-58.3-5-8.1C43.6 319.4 32 288.4 32 256 32 150 118 64 224 64c51.5 0 99.9 20.1 136.4 56.6S416 204.5 416 256c0 106-86 192-192 192zm101.3-138.5c-5.5-2.7-32.4-16-37.5-17.8s-8.7-2.7-12.4 2.7-14.3 17.8-17.5 21.5-6.4 4.1-11.8 1.4c-32.3-16.1-53.4-28.8-74.5-65.1-5.6-9.6 5.6-8.9 16.1-29.6 1.8-3.6.9-6.8-.5-9.5s-12.4-29.9-17-41c-4.5-10.8-9.1-9.3-12.4-9.5-3.2-.2-6.8-.2-10.4-.2s-9.5 1.4-14.4 6.8c-4.9 5.5-18.9 18.4-18.9 44.8s19.4 52 22.1 55.6c2.7 3.6 38.2 58.3 92.7 81.8 12.9 5.6 23 8.9 30.8 11.4 12.9 4.1 24.6 3.5 33.9 2.1 10.3-1.5 32-13.1 36.5-25.8 4.5-12.6 4.5-23.3 3.2-25.6-1.2-2.3-5-3.6-10.5-6.3z" />
                      </svg>
                    </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[400px] md:h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125756.07538750954!2d76.3262594!3d9.5915442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062ba16c6b435f%3A0xaad9f70a1c780803!2sChanganassery%2C%20Kerala!5e0!3m2!1sen!2sin!4v1681900000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Caza Mia Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center justify-center md:justify-start">
                <Image src="/images/logo1.png" alt="Caza Mia Logo" width={80} height={80} className="mr-3" />
                <div>
                  <h3 className="text-2xl font-serif font-bold text-cream">Caza Mia</h3>
                  <p className="text-sm text-gray-400">CATERS & EVENTS</p>
                </div>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} Caza Mia Caters & Events. All rights reserved.</p>
              <p className="text-sm text-gray-400 mt-2">
                {
                // /* <Link href="#" className="hover:text-cream">
                //   Privacy Policy
                // </Link>{" "}
                // |
                // <Link href="#" className="hover:text-cream ml-2">
                //   Terms of Service 
                // </Link>
                // | */

                <Link 
                  href="https://www.linkedin.com/in/joswin18/" 
                  className="inline-flex items-center hover:text-cream ml-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Developed by Joswin P Satheesh
                  <Linkedin className="ml-2 mb-1" size={18} />
                </Link>
                
              }

              </p>
              <p className="text-sm text-gray-400 mt-2">
                {
                // /* <Link href="#" className="hover:text-cream">
                //   Privacy Policy
                // </Link>{" "}
                // |
                // <Link href="#" className="hover:text-cream ml-2">
                //   Terms of Service 
                // </Link>
                // | */

                <Link 
                  href="https://www.foxnity.in/" 
                  className="inline-flex items-center hover:text-cream ml-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Associated with Foxnity Solutions
                  <Globe className="ml-2 " size={18} />
                </Link>
                
              }

              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
