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

export default function CategoryMenuBar(props:any) {

  const handleClick = (selectedSubCategory:any) => {
    props.selectSubCategory(selectedSubCategory)
  }

  const items = [
    { item_name : "Tous", item_link : "solins" },
    { item_name : "couvertines", item_link : "solins" },
    { item_name : "solins", item_link : "solins" },
    { item_name : "faitieres", item_link : "solins" },
    { item_name : "rives", item_link : "solins" },
    { item_name : "noues", item_link : "solins" },
    { item_name : "accessoires", item_link : "solins" }
  ]

  const menus = items.map(item => ( 

    <MenubarMenu key={item.item_link + item.item_name}>
      <MenubarTrigger onClick={() => handleClick(item.item_name)} className="cursor-pointer">
        {item.item_name}
      </MenubarTrigger>
    </MenubarMenu>

    ))

    return (
        <div>

      
    
    <Menubar>

    {menus}
      
    {/* <MenubarMenu>
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
      </MenubarMenu> */}

    </Menubar>
        </div>
    )
}