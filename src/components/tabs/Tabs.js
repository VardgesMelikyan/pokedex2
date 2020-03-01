import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Tabs.css'
const PTabs = (props) => {
    const { stats } = props
    return (
        <Tabs>
            <TabList>
                {stats.map(state => {
                    return (
                        <Tab >{state.name}</Tab>
                    )
                })}
            </TabList>


            {stats.map(state => {
                return (
                    <TabPanel>
                        <span>{state.effect_entries[0].effect}</span>
                    </TabPanel>
                );
            })}
        </Tabs>
    );
}
export default PTabs