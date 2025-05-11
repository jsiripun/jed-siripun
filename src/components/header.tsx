'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Menu } from 'lucide-react';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/navigation';
import { headerMetadata } from '@/helpers/headerMetadata';

const pages = headerMetadata.map(metadata => metadata.title);


function Header() {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState<Boolean | null>(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    const clickedMetadata = headerMetadata.find(m => m.title === event.currentTarget.textContent);
    const route = clickedMetadata ? clickedMetadata.route : "";
    router.push(`/${route}`);
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth={false} className='bg-stone-900'>
        {/* Navigation */}
        <nav className="bg-stone-900 text-stone-100 p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="font-serif text-2xl">Jed Siripun</h1>
            {/* <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                <Menu />
              </button>
            </div>
            <div className="hidden md:flex space-x-8 font-light">
              {pages.map((page) => (
                  <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  className='mx-2 my-2 text-white display:block hover:bg-white hover:text-emerald-900'
                  >
                  {page}
                </Button>
              ))}
            </div> */}
          </div>
        </nav>

        {/* Mobile Menu */}
        {/* {isMenuOpen && (
          <div className="md:hidden bg-stone-800 text-stone-100 p-4 mb-4">
            <div className="flex flex-col space-y-4">
              {pages.map((page) => (
                  <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  className='text-white display:block hover:bg-white hover:text-emerald-900'
                  >
                  {page}
                </Button>
              ))}
            </div>
          </div>
        )} */}
      </Container>
    </AppBar>
  );
}
export default Header;