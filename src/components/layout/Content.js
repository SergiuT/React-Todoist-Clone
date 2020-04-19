import React from 'react';
import { SideBar } from './Sidebar';
import { Tasks } from '../Tasks';

export const Content = () => (
    <section className="content">
        <SideBar />
        <Tasks />
    </section>
)