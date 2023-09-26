
import './App.css';
import Properties from './components/Properties';
import { styled, createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import Switch from '@mui/material/Switch';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
  {
    img: 'https://s2.glbimg.com/VmN2dBNc_4PDfZ3iNhiHsJuqQG8=/620x455/e.glbimg.com/og/ed/f/original/2020/04/24/tm_pf_gabrieladaltro--31.jpg',
    title: 'casa de praia',
  },
  {
    img: 'https://casacor.abril.com.br/wp-content/uploads/sites/7/2022/10/WALTER-DIAS_2022.04.14_PORTO-NEVES_ALTA_01.jpg?resize=1024,683',
    title: 'casa de praia 02',
  },
  {
    img: 'https://media.gazetadopovo.com.br/2020/12/23144454/2259c_01072015_0015-6eb64740.jpg',
    title: 'casa de praia 03',
  },
  {
    img: 'https://www.somaurbanismo.com.br/wp-content/uploads/2018/01/23-01-5-vantagens-de-ter-uma-casa-na-praia-1-1.jpg',
    title: 'casa de praia 04',
  },
  {
    img: 'https://portaljapy.com.br/wp-content/uploads/2021/04/casa-de-campo-contemporanea-portal-japy-800x451.jpeg',
    title: 'casa na campo',
  },
  {
    img: 'https://images.adsttc.com/media/images/52cd/3d0b/e8e4/4e1b/c800/0177/newsletter/P_E_659-407-E_copy-MEDIA.jpg?1389182206',
    title: 'casa na campo 01',
  },
  {
    img: 'https://projetaronline.com/wp-content/uploads/2022/06/fachada%20casa%20de%20campo.png',
    title: 'casa no campo 02',
  },
  {
    img: 'https://i.ytimg.com/vi/AZSZUTzn2rU/maxresdefault.jpg',
    title: 'casa na cidade',
  },
  {
    img: 'https://i0.wp.com/catagua.com.br/wp-content/uploads/2020/09/casas-em-mogi-guacu-e-no-cidade-jardim.jpg',
    title: 'casa na cidade 01',
  },
  {
    img: 'https://s2.glbimg.com/7Qfi1MBLoU2qqHyQpIF4NaF0x2g=/smart/e.glbimg.com/og/ed/f/original/2018/02/06/casa-cidade-cara-de-campo20150327_0008.jpg',
    title: 'casa na cidade 02',
  },
  {
    img: 'https://hibritec.com.br/wp-content/uploads/2022/07/hibritec-piscinaem.jpeg',
    title: 'casa com piscina',
  },
  {
    img: 'https://media.gazetadopovo.com.br/2022/07/27095657/CORTE1-Maximiliano-Scandelari-Casa-Revista-Casa-Sul-Fotos-Nando-Fischer-960x540.jpg',
    title: 'casa com piscina',
  },
];


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  fontFamily: 'serif',
  fontSize: '15px',
  color: theme.palette.text.secondary,
}));

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const mdTheme = createTheme();

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function App() {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute">
          <Toolbar
            sx={{
              pr: '25px', // keep right padding when drawer closed
            }}
          ><h1>Cadastro de imóveis</h1>
          </Toolbar>
            <Switch {...label} />
            </AppBar>
        <Properties />
      </Box>
      <Toolbar
            sx={{
              color: '#6ba3fe',
              pr: '24px', // keep right padding when drawer closed
            }}
          ><h2>preencha o campo assim do seu jeito e encontre a casa do seus sonhos</h2>
          </Toolbar>
         <div>

         <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>




          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          ><h2>Informaçoes sobre o imovel</h2>
          </Toolbar>
         <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={15}>
          <Item>Casa na Praia:

Localização: À beira-mar, com vista para o oceano.
Estilo Arquitetônico: Estilo costeiro, com cores suaves e materiais naturais.
Características Exteriores: Varanda ampla, área de deck, janelas grandes para aproveitar a vista, telhado inclinado para proteção contra ventos fortes.
Interior: Decoração leve e arejada, tons de azul e branco, móveis de vime, muita luz natural, pisos de madeira resistente à água.
Características Especiais: Acesso direto à praia, chuveiro externo para enxaguar a areia, área de churrasco</Item>
        </Grid>
        <Grid item xs={15}>
          <Item>Casa na Montanha:

Localização: Em uma área montanhosa, cercada por altas montanhas e vegetação exuberante.
Estilo Arquitetônico: Estilo alpino ou chalé de montanha, com telhado inclinado para a neve.
Características Exteriores: Varanda com vista panorâmica, grandes janelas para apreciar a paisagem, cores naturais.
Interior: Lareira de pedra, móveis aconchegantes, decoração inspirada na natureza, tetos altos com vigas de madeira.
Características Especiais: Acesso a trilhas para esqui ou caminhadas, decks para apreciar a vista das montanhas.</Item>
        </Grid>
        <Grid item xs={15}>
          <Item>Casa no Campo:

Localização: Em uma área rural, rodeada de campos, fazendas e natureza.
Estilo Arquitetônico: Estilo rústico ou fazenda, com materiais naturais como madeira e pedra.
Características Exteriores: Grande jardim, celeiro ou estábulo, varanda ampla, cores terrosas.
Interior: Móveis de madeira sólida, lareira aconchegante, decoração campestre, muita luz natural.
Características Especiais: Área para cultivo de alimentos, cercado para animais, trilhas para caminhadas.
</Item>
        </Grid>
        <Grid item xs={15}>
          <Item>Casa na Cidade:

Localização: No centro de uma área urbana, cercada por edifícios e comodidades da cidade.
Estilo Arquitetônico: Varia amplamente, desde casas históricas em bairros antigos até apartamentos modernos em arranha-céus.
Características Exteriores: Estilo variado, dependendo da localização, desde fachadas tradicionais a design contemporâneo.
Interior: Layout funcional, decoração moderna ou clássica, mobília urbana, muita iluminação artificial.
Características Especiais: Proximidade de lojas, restaurantes, transportes públicos e vida urbana agitada.</Item>
        </Grid>
      </Grid>
    </Box>
         </div>
          <Toolbar
            sx={{
              color: '#fff',
              background: '#0954ab',
              pr: '25px', // keep right padding when drawer closed
            }}
          ><h1>@TODOS OS DIREITOS RESERVADOS</h1>
          </Toolbar>



    </ThemeProvider>
  );
}


export default App;


