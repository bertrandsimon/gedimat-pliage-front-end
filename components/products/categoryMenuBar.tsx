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

  const items = [
    { item_name : "Tous", item_link : "solins" },
    { item_name : "Couvertines", item_link : "solins" },
    { item_name : "Solins", item_link : "solins" },
    { item_name : "Faitières", item_link : "solins" },
    { item_name : "Rives", item_link : "solins" },
    { item_name : "Noues", item_link : "solins" },
    { item_name : "Accessoires", item_link : "solins" }
  ]

  const menus = items.map(item => ( <p key={item.item_link + item.item_name}>{item.item_name}</p>))
    return (
        <div>

          {menus}
    
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