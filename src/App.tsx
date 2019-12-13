import React, { useState } from 'react';

import TopAppBar, {
  TopAppBarFixedAdjust,
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle
} from '@material/react-top-app-bar';
import Drawer, {
  DrawerAppContent,
  DrawerContent,
  DrawerHeader,
  DrawerTitle
} from '@material/react-drawer';
import MaterialIcon from '@material/react-material-icon';
import List, {
  ListItem,
  ListItemGraphic,
  ListItemText
} from '@material/react-list';

import './App.scss';

export default function App () {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)

  return (
    <div className='drawer-container'>
      <Drawer dismissible open={drawerIsOpen}>
        <DrawerHeader>
          <DrawerTitle tag='h2'>
            jane.smith@gmail.com
          </DrawerTitle>
        </DrawerHeader>

        <DrawerContent>
          <List singleSelection selectedIndex={selectedIndex}>
            <ListItem>
              <ListItemGraphic graphic={<MaterialIcon icon='folder'/>} />

              <ListItemText primaryText='Mail' />
            </ListItem>
          </List>
        </DrawerContent>
      </Drawer>

      <DrawerAppContent className='drawer-app-content'>
        <TopAppBar>
          <TopAppBarRow>
            <TopAppBarSection align='start'>
              <TopAppBarIcon navIcon tabIndex={0}>
                <MaterialIcon
                  hasRipple
                  icon='menu'
                  onClick={() => setDrawerIsOpen(!drawerIsOpen)}
                />
              </TopAppBarIcon>

              <TopAppBarTitle>Inbox</TopAppBarTitle>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>

        <TopAppBarFixedAdjust>
          Your inbox content
        </TopAppBarFixedAdjust>
      </DrawerAppContent>
    </div>
  )
}
