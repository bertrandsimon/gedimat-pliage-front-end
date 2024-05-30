import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"

export default function CategoryMenuBar() {
    return (
        <div>
    
    <Menubar>
      
    <MenubarMenu>
        <MenubarTrigger>Tous</MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Couvertines</MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Solins</MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Faitières</MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Rives</MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Noues</MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Accessoires</MenubarTrigger>
      </MenubarMenu>

    </Menubar>
        </div>
    )
}