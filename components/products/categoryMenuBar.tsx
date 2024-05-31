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
        <MenubarTrigger className="cursor-pointer">Tous</MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">Couvertines</MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">Solins</MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">Faitières</MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">Rives</MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">Noues</MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">Accessoires</MenubarTrigger>
      </MenubarMenu>

    </Menubar>
        </div>
    )
}