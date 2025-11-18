import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";

const Contact03Page = () => (
  <div className="flex items-center justify-center">
    <div className="w-full max-w-(--breakpoint-xl) mx-auto px-6 xl:px-0">
      <h2 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tighter">
        We&apos;d love to hear from you
      </h2>
      <p className="mt-4 text-base sm:text-lg text-muted-foreground">
        Our friendly team is always here to chat.
      </p>
      <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div className="border border-dashed bg-primary/1 p-6 pb-10 rounded-lg">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
            <MailIcon />
          </div>
          <h3 className="mt-8 font-bold text-xl">Email</h3>
          <p className="mt-2.5 mb-4 text-muted-foreground">
            Our team is ready to help!
          </p>
          <Link
            className="font-medium"
            href="mailto:wlccarloans@gmail.com"
          >
            wlccarloans@gmail.com
          </Link>
        </div>

        <div className="border border-dashed bg-primary/1 p-6 pb-10 rounded-lg">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
            <MapPinIcon />
          </div>
          <h3 className="mt-8 font-bold text-xl">Office</h3>
          <p className="mt-2.5 mb-4 text-muted-foreground">
            Come say hello at our office.
          </p>
          <Link
            className="font-medium"
            href="https://map.google.com"
            target="_blank"
          >
            4th Flr. Room 407, Wil-Vic Bldg <br /> 125 Kamias Rd <br /> Quezon City, Metro Manila
          </Link>
        </div>
        <div className="border border-dashed bg-primary/1 p-6 pb-10 rounded-lg">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/5 dark:bg-primary/10 text-primary rounded-full">
            <PhoneIcon />
          </div>
          <h3 className="mt-8 font-bold text-xl">Phone</h3>
          <p className="mt-2.5 mb-4 text-muted-foreground">
            Monday - Friday: 9:00 AM - 6:00 PM
          </p>
          <Link className="font-medium" href="tel:akashmoradiya3444@gmail.com">
            (555) 123-4567
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Contact03Page;
