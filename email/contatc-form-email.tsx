import React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ConatctFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ConatctFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Mew message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Section className="bg-white border border-black/10 my-10 px-10 py-4 rounded-md">
            <Container>
              <Heading className="leading-tight">
                You received the following message from the conatct form{' '}
              </Heading>
              <Hr />
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is: {senderEmail}</Text>
            </Container>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
}
