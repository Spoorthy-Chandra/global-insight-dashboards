import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Send } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />

      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
              <Mail className="text-primary" size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions or feedback? We'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="glass rounded-2xl p-8 card-shadow animate-scale-in">
              <h2 className="text-2xl font-bold mb-6">Send Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message here..."
                    required
                    className="mt-2 min-h-32"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-primary hover:opacity-90 transition-opacity"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send className="ml-2" size={18} />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass rounded-2xl p-8 card-shadow animate-fade-in-up">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Email:</strong>
                    <br />
                    info@inequalitydata.com
                  </p>
                  <p>
                    <strong className="text-foreground">Address:</strong>
                    <br />
                    123 Data Analytics Street
                    <br />
                    Research City, RC 12345
                  </p>
                  <p>
                    <strong className="text-foreground">Hours:</strong>
                    <br />
                    Monday - Friday: 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>

              <div className="glass rounded-2xl p-8 card-shadow animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Documentation</li>
                  <li>• API Access</li>
                  <li>• Data Sources</li>
                  <li>• Privacy Policy</li>
                  <li>• Terms of Service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
