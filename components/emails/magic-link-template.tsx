import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
} from '@react-email/components'

interface MagicLinkEmailProps {
    name: string
    magicLink: string
    expiryMinutes: number
}

export const MagicLinkEmail = ({
    name = 'Utilisateur',
    magicLink = 'https://example.com/magic-link',
    expiryMinutes = 15,
}: MagicLinkEmailProps) => (
    <Html>
        <Head />
        <Preview>Votre lien de connexion pour Pliage Aluminium</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={logoContainer}>
                    <Img
                        src={`${process.env.NEXT_PUBLIC_URL}/images/logo-pliage-aluminium.png`}
                        width="200"
                        height="60"
                        alt="Pliage Aluminium"
                        style={logo}
                    />
                </Section>

                <Heading style={h1}>Connexion à votre compte</Heading>

                <Text style={text}>
                    Bonjour {name},
                </Text>

                <Text style={text}>
                    Vous avez demandé un lien de connexion pour accéder à votre compte Pliage Aluminium.
                </Text>

                <Section style={buttonContainer}>
                    <Link style={button} href={magicLink}>
                        Se connecter
                    </Link>
                </Section>

                <Text style={text}>
                    Ce lien de connexion est valide pendant {expiryMinutes} minutes.
                </Text>

                <Text style={text}>
                    Si vous n'avez pas demandé ce lien, vous pouvez ignorer cet email en toute sécurité.
                </Text>

                <Text style={text}>
                    Pour des raisons de sécurité, ce lien ne peut être utilisé qu'une seule fois.
                </Text>

                <Text style={footer}>
                    Cordialement,<br />
                    L'équipe Pliage Aluminium
                </Text>
            </Container>
        </Body>
    </Html>
)

const main = {
    backgroundColor: '#f6f9fc',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '20px 0 48px',
    marginBottom: '64px',
}

const logoContainer = {
    textAlign: 'center' as const,
    marginBottom: '32px',
}

const logo = {
    margin: '0 auto',
}

const h1 = {
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '40px 0',
    padding: '0',
    textAlign: 'center' as const,
}

const text = {
    color: '#333',
    fontSize: '16px',
    lineHeight: '26px',
    margin: '16px 0',
}

const buttonContainer = {
    textAlign: 'center' as const,
    margin: '32px 0',
}

const button = {
    backgroundColor: '#B51B1B',
    borderRadius: '8px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'inline-block',
    padding: '16px 32px',
    border: 'none',
    cursor: 'pointer',
}

const footer = {
    color: '#666',
    fontSize: '14px',
    lineHeight: '24px',
    marginTop: '32px',
    textAlign: 'center' as const,
}

export default MagicLinkEmail
