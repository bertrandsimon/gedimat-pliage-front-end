import { useDispatch } from 'react-redux'
import { selectedSubCategory } from '@/app/reducers/cart'
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'

import { couverture_etancheite_items } from '@/app/datas/subCategoryItems'

export default function CategoryMenuBar(props: any) {
  const dispatch = useDispatch()

  const handleClick = (selectedSubCategoryLink: any) => {
    props.selectSubCategory(selectedSubCategoryLink)
    dispatch(selectedSubCategory(selectedSubCategoryLink))
  }

  const menus = couverture_etancheite_items.map((item) => (
    <MenubarMenu key={item.item_link + item.item_name}>
      <MenubarTrigger
        onClick={() => handleClick(item.item_link)}
        className="cursor-pointer"
      >
        {item.item_name}
      </MenubarTrigger>
    </MenubarMenu>
  ))

  return (
    <div>
      <Menubar>{menus}</Menubar>
    </div>
  )
}
