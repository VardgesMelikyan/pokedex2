import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Tabs.css'
const PTabs = (props) => {
    const { abilities, types } = props
    return (
        <Tabs forceRenderTabPanel defaultIndex={1}>
            <TabList>
                <Tab><h4>Abilities</h4></Tab>
                <Tab><h4>Types</h4></Tab>
            </TabList>
            <TabPanel>
                <Tabs forceRenderTabPanel>
                    <TabList>
                        {abilities.map(ability => {
                            return <Tab><h6 className="text-capitalize">{ability.name}</h6></Tab>
                        })}
                    </TabList>
                    {abilities.map(ability => {
                        return (
                            <TabPanel>
                                {ability.effect_entries[0].effect}
                            </TabPanel>
                        );
                    })}
                </Tabs>
            </TabPanel>
            <TabPanel>
                <Tabs forceRenderTabPanel>
                    <TabList>
                        {types.map(type => {
                            return <Tab><h6 className='text-capitalize'>{type.name}</h6></Tab>
                        })}
                    </TabList>
                    {types.map(type => {
                        console.log(type)
                        return (
                            <TabPanel>
                                <div><b>Move Damage Class :</b> {type.move_damage_class.name}</div>
                                <div><b>Double Damage From :</b>
                                    {type.damage_relations.double_damage_from.map(damage_from => {
                                        return <>{damage_from.name},</>
                                    })}
                                </div>
                                <div><b>Double Damage To :</b>
                                    {type.damage_relations.double_damage_to.map(damage_to => {
                                        return <>{damage_to.name},</>
                                    })}
                                </div>
                                <div><b>Half Damage From :</b>
                                    {type.damage_relations.half_damage_from.map(damage_from => {
                                        return <>{damage_from.name},</>
                                    })}
                                </div>
                                <div><b>Half Damage To :</b>
                                    {type.damage_relations.half_damage_to.map(damage_to => {
                                        return <>{damage_to.name},</>
                                    })}
                                </div>
                                <div><b>No Damage From :</b>
                                    {type.damage_relations.no_damage_from.map(damage_from => {
                                        return <>{damage_from.name},</>
                                    })}
                                </div>
                                <div><b>No Damage To :</b>
                                    {type.damage_relations.no_damage_to.map(damage_to => {
                                        return <>{damage_to.name},</>
                                    })}
                                </div>
                            </TabPanel>
                        );
                    })}
                </Tabs>
            </TabPanel>
        </Tabs>
    );
}
export default PTabs