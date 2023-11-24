import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@mui/icons-material/Room';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#1976d2',
                color: '#fff',
                py: 2,
                mt: 'auto',
            }}
        >
            <Container sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap-reverse', }}>
                {/* Left Side */}
                <Box sx={{ flex: '1' }}>
                    {/* Logo and Name */}
                    <Typography variant="h5" sx={{ fontWeight: 'bold', m: 2, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        WELLCOME, TO 
                        <img
                            src="https://i.ibb.co/nzsL23x/logo.png"
                            alt="Logo"
                            style={{ height: '40px'}}
                        />
                    </Typography>
                    {/* Disclaimer or Additional Information */}
                    <Typography variant="body2" sx={{mb: 4}}>
                        Connect with us on social media for the latest updates and news about our services.
                    </Typography>

                    {/* Copyright */}
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        &copy; {new Date().getFullYear()} Your Website. All Rights Reserved.
                    </Typography>
                </Box>

                {/* Right Side */}
                <Box sx={{ flex: '1' }}>
                    {/* Contact Information */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <EmailIcon sx={{ mr: 1 }} />
                        <Typography variant="body2">fakhruddinshovon@gmail.com</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <PhoneIcon sx={{ mr: 1 }} />
                        <Typography variant="body2">+00839032984</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <RoomIcon sx={{ mr: 1 }} />
                        <Typography variant="body2">123 Main Street, Chottogram, Bangladesh</Typography>
                    </Box>

                    {/* Social Media Links */}
                    <Box sx={{ display: 'flex' }}>
                        <IconButton color="inherit" href="">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton color="inherit" href="">
                            <TwitterIcon />
                        </IconButton>
                        <IconButton color="inherit" href="">
                            <LinkedInIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
