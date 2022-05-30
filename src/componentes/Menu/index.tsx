import { Menu as MenuContainer, MenuItem, MenuButton, MenuList, IconButton, Button, Box, Spacer } from "@chakra-ui/react";
import { HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/Auth";

function Menu() {
    const { signOut } = useAuth();
    let navigate = useNavigate();

    return (
        <Box display={"flex"}>
            <MenuContainer>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                />
                <MenuList>
                    <MenuItem icon={<AddIcon />} onClick={() => navigate('/')}>
                        Vehicles
                    </MenuItem>
                    <MenuItem icon={<ExternalLinkIcon />} onClick={() => navigate('/styled')}>
                        Exemplo usando Styled Components
                    </MenuItem>
                    <MenuItem icon={<RepeatIcon />} onClick={() => navigate('/chakra')}>
                        Exemplo usando Chakra UI
                    </MenuItem>
                </MenuList>
            </MenuContainer>
            <Spacer></Spacer>
            <Button colorScheme={"red"} onClick={() => signOut()}>Deslogar</Button>
        </Box>
    )
}

export default Menu;