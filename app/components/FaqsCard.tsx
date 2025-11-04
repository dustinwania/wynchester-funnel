import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionCard() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>What kind of vehicles do you accept?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We accept all types of vehicles, including cars, motorcycles, and
            trucks.
          </p>
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="item-2">
        <AccordionTrigger>How long does it take to process my loan and release the cash?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We offer a fast and efficient loan processing system. On average,
            it takes 3 hours to process a loan and release the cash.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>What if the OR/CR of my car is not yet under my name (the vehicle was sold to me)?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Just present the original OR/CR of the vehicle together with the notarized deed of sale, and valid ID of the original owner.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>What if the OR/CR of my car is not yet under my name (the vehicle was sold to me)?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Just present the original OR/CR of the vehicle together with the notarized deed of sale, and valid ID of the original owner.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger>What if my vehicle has an existing loan from a bank or is under private financing?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We pay off the balance with at least 20% remaining balance from the bank.
          </p>
        </AccordionContent>
      </AccordionItem>



    </Accordion>
  )
}
