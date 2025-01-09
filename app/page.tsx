import { Toaster } from "react-hot-toast";
import ContactForm from "./components/contactform/ContactForm";
import Message from "./components/message";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-between p-4">
      <div className="mr-40"><Message /></div>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center mt-20">Contact Us</h1>
        <ContactForm />
      </div>
      <Toaster />
    </div>

  );
}
