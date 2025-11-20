import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? `https://${process.env.NEXT_PUBLIC_SITE_URL}`
  : "http://localhost:3001";

export interface ContactUsEmailToClientProps {
  firstName: string;
  emailAddress: string;
  phoneNumber: string;
}

export default function ContactUsEmailToClient(
  props: ContactUsEmailToClientProps
) {
  const { firstName, emailAddress, phoneNumber } = props;

  return (
    <Tailwind>
      <Html lang="en">
        <Head />
        <Preview>
          We&apos;re extremely excited to connect with you and explore how we
          can make your renovation goals a reality.
        </Preview>

        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Section className="mt-[32px]">
              <Link href={baseUrl}>
                <Img
                  src={`${baseUrl}/logo.svg`}
                  width="250"
                  height="100"
                  alt="Ultra GSM Construction Logo"
                  className="mx-auto my-0"
                />
              </Link>
            </Section>
            <Section className="mx-auto max-w-[465px] bg-white px-6 py-4 dark:bg-gray-900">
              <Section className="mb-4 mt-4">
                <Heading className="text-gray-700 dark:text-gray-200">
                  Hi {firstName},
                </Heading>

                <Text className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
                  We hope this message finds you well. Thank you for reaching
                  out to Ultra GSM Construction. We greatly appreciate your
                  interest in our services and the opportunity to potentially
                  work with you to transform your space.
                </Text>
                <Text className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
                  We understand the importance of your inquiry, and we&apos;re
                  excited to learn more about your renovation needs and how we
                  can assist you in achieving your vision. Our team is committed
                  to delivering high-quality craftsmanship, innovative design,
                  and exceptional customer service.
                </Text>
                <Text className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
                  We want to assure you that your inquiry is important to us,
                  and we will make it a top priority. We aim to respond to all
                  inquiries within 24 hours or less. In the meantime, if you
                  have any specific questions or details you&apos;d like to
                  share with us, please feel free to reply to this email or
                  contact us via phone at{" "}
                  <Link href="tel:778-251-9457">+1 (778) 251-9457</Link>.
                </Text>
                <Text className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
                  We look forward to speaking with you and exploring how we can
                  bring your renovation dreams to life. Thank you for
                  considering Ultra GSM Construction, and we&apos;ll be in touch
                  very soon!
                </Text>

                <Text className="mt-2 text-gray-600 dark:text-gray-300">
                  Thanks, <br />
                  Ultra GSM Construction Team
                </Text>

                <Button
                  href={`${baseUrl}`}
                  className="mt-8 rounded bg-blue-600 px-6 py-2 text-sm font-medium capitalize text-white"
                >
                  Visit Website
                </Button>
              </Section>
              <Hr />
              <Section>
                <Text className="mt-3 text-gray-500 dark:text-gray-400">
                  © {new Date().getFullYear()} Ultra GSM Construction. All
                  Rights Reserved.
                </Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
