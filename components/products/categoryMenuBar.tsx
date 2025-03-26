import { useDispatch } from 'react-redux'
import { selectedSubCategory } from '@/app/reducers/cart'
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'

import {
  couverture_etancheite,
  facade_bardage,
  menuiserie_fermeture,
} from '@/app/datas/subCategoryItems'

export default function CategoryMenuBar(props: any) {
  const dispatch = useDispatch()

  // Mapping of category names to their arrays
  const subCategoryMap: Record<string, any[]> = {
    couverture_etancheite,
    facade_bardage,
    menuiserie_fermeture,
  }

  const handleClick = (selectedSubCategoryLink: any) => {
    props.selectSubCategory(selectedSubCategoryLink)
    dispatch(selectedSubCategory(selectedSubCategoryLink))
  }

  const currentSubCategories = subCategoryMap[props.selectedCategory] || []

  const menus = currentSubCategories.map((item) => (
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
    <div className="overflow-scroll sm:overflow-hidden">
      <Menubar>{menus}</Menubar>
    </div>
  )
}
