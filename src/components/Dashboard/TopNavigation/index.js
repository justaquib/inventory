'use client';
import Icon from '@/components/Generic/Icon';
import React from 'react';
import tabs from '../../../utils/json/navTabs.json';
import useTabStore from '@/store/TabStore';
import Drawer from '@/components/Generic/Drawer';
import { useToggleElement } from '@/hooks/useToggleElement';
import useAuthStore from '@/store/AuthStore';

const TopNavigation = () => {
  const { setSelectedTabName, setSelectedTabIndex, selectedTabIndex } = useTabStore((state) => ({
    setSelectedTabName: state.setSelectedTabName,
    setSelectedTabIndex: state.setSelectedTabIndex,
    selectedTabIndex: state.selectedTabIndex
  }));
  const role = useAuthStore((state) => state.role);
  const { toggle: toggleNavDrawer } = useToggleElement();

  const handleTabClick = (tab) => {
    setSelectedTabName(tab.name);
    setSelectedTabIndex(tab.id);
    if ( tab.name === 'Notification') {
      toggleNavDrawer('nav-drawer');
    };
  };
  return (
    <>
      <div className='w-full py-1.5 bg-white px-6'>
          <div className='flex justify-end items-center h-full gap-x-4'>
            <div>
              Welcome {role === 'manager' ? 'Manager' : 'User'}
            </div>
            {
              tabs && tabs.filter(tab => tab.position === 'top').reverse().map((tab) => (
                <button key={tab.id} type='button'
                  onClick= { () => handleTabClick(tab)}
                  className={`flex flex-row gap-2 py-3 px-3 text-start rounded-full
                  ${selectedTabIndex === tab.id ? 'bg-primary-50 text-secondary-800 font-semibold' : 'text-secondary-600 font-normal'}`}
                  data-toggle='tooltip' data-placement='bottom' data-text={tab.name}
                >
                  <Icon name={tab.icon} className='w-6 h-6' />
                </button>
              ))
            }
          </div>
      </div>
      <Drawer position='right' id='nav-drawer'
        className='flex w-full h-full justify-center items-center'
      >
            <div className='flex flex-col gap-4 items-center justify-center'>
              <Icon name='bell-slash' className='w-10 h-10 text-secondary-500' />
              <h1 className='font-semibold text-secondary-500 text-2xl'>No Notification</h1>
            </div>
      </Drawer>
    </>
  );
};

export default TopNavigation;