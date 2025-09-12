// import { useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Label } from "@/components/ui/label";
// import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";

// const Contact = () => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "", 
//     phone: "",
//     restaurantType: "",
//     message: "",
//     projectType: ""
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast({
//       title: "Message Sent!",
//       description: "We'll get back to you within 24 hours to discuss your QR menu project.",
//     });
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       restaurantType: "",
//       message: "",
//       projectType: ""
//     });
//   };

//   const contactInfo = [
//     {
//       icon: Phone,
//       title: "Call Us",
//       details: "+1 (555) 123-4567",
//       subtitle: "Mon-Fri 9AM-6PM EST"
//     },
//     {
//       icon: Mail,
//       title: "Email Us", 
//       details: "hello@qrmenumagic.com",
//       subtitle: "We respond within 4 hours"
//     },
//     {
//       icon: MapPin,
//       title: "Visit Us",
//       details: "123 Digital Avenue, Tech City",
//       subtitle: "Schedule an appointment"
//     },
//     {
//       icon: Clock,
//       title: "Quick Turnaround",
//       details: "24-48 Hour Delivery",
//       subtitle: "Fast, professional service"
//     }
//   ];

//   return (
//     <section className="py-20 bg-background">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
//             Start Your QR Menu Project
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//             Ready to transform your restaurant's dining experience? Let's create something amazing together.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <Card className="shadow-primary border-0">
//             <CardHeader>
//               <CardTitle className="font-display text-2xl">Get Your Quote</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="name">Restaurant Name *</Label>
//                     <Input
//                       id="name"
//                       value={formData.name}
//                       onChange={(e) => setFormData({...formData, name: e.target.value})}
//                       placeholder="Your restaurant name"
//                       required
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="email">Email Address *</Label>
//                     <Input
//                       id="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={(e) => setFormData({...formData, email: e.target.value})}
//                       placeholder="your@email.com"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="phone">Phone Number</Label>
//                     <Input
//                       id="phone"
//                       type="tel"
//                       value={formData.phone}
//                       onChange={(e) => setFormData({...formData, phone: e.target.value})}
//                       placeholder="+1 (555) 123-4567"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label>Restaurant Type</Label>
//                     <Select value={formData.restaurantType} onValueChange={(value) => setFormData({...formData, restaurantType: value})}>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Select type" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="fine-dining">Fine Dining</SelectItem>
//                         <SelectItem value="casual">Casual Dining</SelectItem>
//                         <SelectItem value="fast-casual">Fast Casual</SelectItem>
//                         <SelectItem value="cafe">Cafe</SelectItem>
//                         <SelectItem value="bar">Bar/Pub</SelectItem>
//                         <SelectItem value="other">Other</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <Label>Project Type</Label>
//                   <Select value={formData.projectType} onValueChange={(value) => setFormData({...formData, projectType: value})}>
//                     <SelectTrigger>
//                       <SelectValue placeholder="What do you need?" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="qr-design">QR Menu Card Design</SelectItem>
//                       <SelectItem value="interactive-menu">Interactive Digital Menu</SelectItem>
//                       <SelectItem value="full-solution">Complete QR Solution</SelectItem>
//                       <SelectItem value="redesign">Menu Redesign</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="message">Tell us about your project</Label>
//                   <Textarea
//                     id="message"
//                     value={formData.message}
//                     onChange={(e) => setFormData({...formData, message: e.target.value})}
//                     placeholder="Describe your vision, current challenges, or specific requirements..."
//                     rows={5}
//                   />
//                 </div>

//                 <Button 
//                   type="submit" 
//                   size="lg" 
//                   className="w-full gradient-primary text-white shadow-primary hover:shadow-glow transition-smooth group"
//                 >
//                   Send Message
//                   <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>

//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div className="grid sm:grid-cols-2 gap-6">
//               {contactInfo.map((info, index) => {
//                 const Icon = info.icon;
//                 return (
//                   <Card key={index} className="border-0 shadow-lg hover:shadow-secondary transition-smooth">
//                     <CardContent className="p-6 text-center">
//                       <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
//                         <Icon className="h-6 w-6 text-white" />
//                       </div>
//                       <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
//                       <p className="text-sm text-primary font-medium mb-1">{info.details}</p>
//                       <p className="text-xs text-muted-foreground">{info.subtitle}</p>
//                     </CardContent>
//                   </Card>
//                 );
//               })}
//             </div>

//             {/* FAQ Quick Links */}
//             <Card className="border-0 shadow-lg gradient-secondary text-white">
//               <CardContent className="p-8">
//                 <h3 className="font-display text-xl font-bold mb-4">Frequently Asked Questions</h3>
//                 <div className="space-y-4 text-sm">
//                   <div>
//                     <strong>How long does it take?</strong>
//                     <p className="opacity-90">Most projects are completed within 24-48 hours.</p>
//                   </div>
//                   <div>
//                     <strong>Do you provide printing?</strong>
//                     <p className="opacity-90">Yes! We provide print-ready files and can arrange printing.</p>
//                   </div>
//                   {/* <div>
//                     <strong>Can you integrate with our POS?</strong>
//                     <p className="opacity-90">Absolutely! We work with all major POS systems.</p>
//                   </div> */}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser"; // ✅ import EmailJS

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    restaurantType: "",
    message: "",
    projectType: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_hgcq36e",        // ✅ Your Service ID
        "template_0xj4fgh",       // ✅ Your Template ID
        formData,                 // ✅ Data must match template vars
        "3mT0gFRph6B_YPYm3"       // ✅ Your Public Key
      );

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours to discuss your QR menu project.",
      });

      // reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        restaurantType: "",
        message: "",
        projectType: ""
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };
  const contactInfo = [
        {
          icon: Phone,
          title: "Call Us",
          details: "9150431574 / 7330719394",
          subtitle: "Mon-Sun 9AM-10PM EST"
        },
        {
          icon: Mail,
          title: "Email Us", 
          details: "contact.qrkaro@gmail.com",
          subtitle: "We respond within 4 hours"
        },
        // {
        //   icon: MapPin,
        //   title: "Visit Us",
        //   details: "123 Digital Avenue, Tech City",
        //   subtitle: "Schedule an appointment"
        // },
        // {
        //   icon: Clock,
        //   title: "Quick Turnaround",
        //   details: "24-48 Hour Delivery",
        //   subtitle: "Fast, professional service"
        // }
      ];
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Start Your QR Menu Project
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your restaurant's dining experience? Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-primary border-0">
            <CardHeader>
              <CardTitle className="font-display text-2xl">Get Your Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Restaurant Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your restaurant name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Phone + Restaurant Type */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 "
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Restaurant Type</Label>
                    <Select
                      value={formData.restaurantType}
                      onValueChange={(value) => setFormData({ ...formData, restaurantType: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fine-dining">Fine Dining</SelectItem>
                        <SelectItem value="casual">Casual Dining</SelectItem>
                        <SelectItem value="fast-casual">Fast Casual</SelectItem>
                        <SelectItem value="cafe">Cafe</SelectItem>
                        <SelectItem value="bar">Bar/Pub</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Project Type */}
                <div className="space-y-2">
                  <Label>Project Type</Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="What do you need?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="qr-design">QR Menu Card Design</SelectItem>
                      <SelectItem value="interactive-menu">Interactive Digital Menu</SelectItem>
                      <SelectItem value="full-solution">Complete QR Solution</SelectItem>
                      <SelectItem value="redesign">Menu Redesign</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your project</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your vision, current challenges, or specific requirements..."
                    rows={5}
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full gradient-primary text-white shadow-primary hover:shadow-glow transition-smooth group"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </form>
            </CardContent>
          </Card>
          <div  className="space-y-8">
             <div id="contact-info" className="grid sm:grid-cols-2 gap-6">
               {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-secondary transition-smooth">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                      <p className="text-sm text-primary font-medium mb-1">{info.details}</p>
                      <p className="text-xs text-muted-foreground">{info.subtitle}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* FAQ Quick Links */}
            <Card className="border-0 shadow-lg gradient-secondary text-white">
              <CardContent className="p-8">
                <h3 className="font-display text-xl font-bold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <strong>How long does it take?</strong>
                    <p className="opacity-90">Most projects are completed within 24-48 hours.</p>
                  </div>
                  <div>
                    <strong>Do you provide printing?</strong>
                    <p className="opacity-90">Yes! We provide print-ready files and can arrange printing.</p>
                  </div>
                  {/* <div>
                    <strong>Can you integrate with our POS?</strong>
                    <p className="opacity-90">Absolutely! We work with all major POS systems.</p>
                  </div> */}
                </div>
              </CardContent>
            </Card>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
