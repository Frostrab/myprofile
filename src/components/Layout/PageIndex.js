import React from 'react';
import Layout from 'antd/lib/layout/layout';
import Header from './Header'
import Content from './Content'
import Footer from './Footer'


const PageIndex = () => {

    return(
        <div>
            <Layout>
                <Header />
                <Content />
                <Footer />
            </Layout>
        </div>
    )
}

export default PageIndex