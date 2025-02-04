import {
  Body,
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
  Text,
} from '@react-email/components'
import * as React from 'react'

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : ''

interface EmailTemplateProps {
  firstName: string
  mailOrderDate: string
  orderId: string
}

export const EmailOrderTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  mailOrderDate,
  orderId,
}) => (
  <div>
    <Html>
      <Head />
      <Preview>
        Voici le résumé de votre commande sur pliage-aluminium.com
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Hr style={global.hr} />
          <Section style={message}>
            <Img
              src="https://pliage-aluminium.com/images/emails/logo.jpg"
              width="192"
              height="102"
              alt="Logo"
              style={{ margin: 'auto' }}
            />
            <Text className="text-2xl">Commande validée.</Text>
            <Text style={global.text}>
              Veuillez contacter un de nos experts pour vérifier que votre
              commande est conforme.
            </Text>
            <Text style={{ ...global.text, marginTop: 24 }}>
              Vous pourrez ensuite régler directement au téléphone ou en
              magasin.
            </Text>
          </Section>
          {/* <Hr style={global.hr} />
          <Section style={global.defaultPadding}>
            <Text style={adressTitle}>Shipping to: Alan Turing</Text>
            <Text style={{ ...global.text, fontSize: 14 }}>
              2125 Chestnut St, San Francisco, CA 94123
            </Text>
          </Section> */}

          <Hr style={global.hr} />
          <Section style={global.defaultPadding}>
            <Row style={{ display: 'inline-flex', marginBottom: 40 }}>
              <Column style={{ width: '250px' }}>
                <Text style={global.paragraphWithBold}>Commande Numéro :</Text>
                <Text style={track.number}>{orderId}</Text>
              </Column>
              <Column style={{ width: '250px' }}>
                <Text style={global.paragraphWithBold}>
                  Date de commande :{' '}
                </Text>
                <Text style={track.number}>
                  {new Date(mailOrderDate).toLocaleString('fr-FR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  })}
                </Text>
              </Column>
            </Row>
          </Section>
          <Hr style={global.hr} />

          <Hr style={global.hr} />

          <Hr style={{ ...global.hr, marginTop: '12px' }} />
          <Section style={paddingY}>
            <Row style={footer.policy}>
              <Text style={footer.text}>
                {' '}
                <a href="www.pliage-aluminium.com" target="_blank">
                  www.pliage-aluminium.com
                </a>
              </Text>
            </Row>
            <Row>
              <Text
                style={{ ...footer.text, paddingTop: 30, paddingBottom: 30 }}
              >
                Si vous avez la moindre question n'hésitez pas à nous contacter.
              </Text>
            </Row>
            <Row>
              <Text style={footer.text}>© Pliage de la Vallée 2024</Text>
            </Row>
            <Row>
              <Text style={footer.text}>Un site du groupe GEDIMAT</Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  </div>
)

export default EmailOrderTemplate
const paddingX = {
  paddingLeft: '40px',
  paddingRight: '40px',
}

const paddingY = {
  paddingTop: '22px',
  paddingBottom: '22px',
}

const paragraph = {
  margin: '0',
  lineHeight: '2',
}

const global = {
  paddingX,
  paddingY,
  defaultPadding: {
    ...paddingX,
    ...paddingY,
  },
  paragraphWithBold: { ...paragraph, fontWeight: 'bold' },
  heading: {
    fontSize: '32px',
    lineHeight: '1.3',
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: '-1px',
  } as React.CSSProperties,
  text: {
    ...paragraph,
    color: '#747474',
    fontWeight: '500',
  },
  button: {
    border: '1px solid #929292',
    fontSize: '16px',
    textDecoration: 'none',
    padding: '10px 0px',
    width: '220px',
    display: 'block',
    textAlign: 'center',
    fontWeight: 500,
    color: '#000',
  } as React.CSSProperties,
  hr: {
    borderColor: '#E5E5E5',
    margin: '0',
  },
}

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: '10px auto',
  width: '600px',
  maxWidth: '100%',
  border: '1px solid #E5E5E5',
}

const track = {
  container: {
    padding: '22px 40px',
    backgroundColor: '#F7F7F7',
  },
  number: {
    margin: '12px 0 0 0',
    fontWeight: 500,
    lineHeight: '1.4',
    color: '#6F6F6F',
  },
}

const message = {
  padding: '40px 74px',
  textAlign: 'center',
} as React.CSSProperties

const adressTitle = {
  ...paragraph,
  fontSize: '15px',
  fontWeight: 'bold',
}

const recomendationsText = {
  margin: '0',
  fontSize: '15px',
  lineHeight: '1',
  paddingLeft: '10px',
  paddingRight: '10px',
}

const recomendations = {
  container: {
    padding: '20px 0',
  },
  product: {
    verticalAlign: 'top',
    textAlign: 'left' as const,
    paddingLeft: '2px',
    paddingRight: '2px',
  },
  title: { ...recomendationsText, paddingTop: '12px', fontWeight: '500' },
  text: {
    ...recomendationsText,
    paddingTop: '4px',
    color: '#747474',
  },
}

const menu = {
  container: {
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '20px',
    backgroundColor: '#F7F7F7',
  },
  content: {
    ...paddingY,
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  title: {
    paddingLeft: '20px',
    paddingRight: '20px',
    fontWeight: 'bold',
  },
  text: {
    fontSize: '13.5px',
    marginTop: 0,
    fontWeight: 500,
    color: '#000',
  },
  tel: {
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '32px',
    paddingBottom: '22px',
  },
}

const categories = {
  container: {
    width: '370px',
    margin: 'auto',
    paddingTop: '12px',
  },
  text: {
    fontWeight: '500',
    color: '#000',
  },
}

const footer = {
  policy: {
    width: '166px',
    margin: 'auto',
  },
  text: {
    margin: '0',
    color: '#AFAFAF',
    fontSize: '13px',
    textAlign: 'center',
  } as React.CSSProperties,
}
