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

import { couverture_etancheite_items } from "@/app/datas/subCategoryItems"

export default function CategoryMenuBar(props:any) {

  const handleClick = (selectedSubCategory:any) => {
    props.selectSubCategory(selectedSubCategory)
  }

  const menus = couverture_etancheite_items.map(item => ( 

    <MenubarMenu key={item.item_link + item.item_name}>
      <MenubarTrigger onClick={() => handleClick(item.item_link)} className="cursor-pointer">
        {item.item_name}
      </MenubarTrigger>
    </MenubarMenu>

    ))

    return (
        <div>

          <Menubar>
            {menus}
          </Menubar>

        </div>
    )
}