


import { Button, Form, Input, Typography, Avatar, List, Row } from 'antd';
import { useNavigate } from "react-router-dom";
import { useData } from '../components/DataContext';
const { Text } = Typography;
import HeadBanner from '../components/HeadBanner.jsx';
import { useEffect, useState } from 'react';


const Homepage = () => {
    const navigate = useNavigate();
    const [banner, setBanner] = useState('')

    const { data } = useData();
    console.log('data', data);
    const dataObj = JSON.parse(data || "{}")
    if (dataObj?.type === 'qr') {
        console.log(dataObj.data)
    }

    const listData = [
        {
            title: 'Conference Check-in',
            description: "所有參會者只需Reg一次即可",
            clickfcn: () => {
                console.log('click on 1')
            }
        },
        {
            title: 'Catering Check-in',
            description: "desc",

            clickfcn: () => {
                console.log('click on 2')
            }
        },
        {
            title: 'Welcome Reception',
            description: "desc",

            clickfcn: () => {
                console.log('click on 3')
            }
        },
        {
            title: 'On-site Registration',
            description: "現場註冊，使用前請確保用戶已完成繳費！",

            clickfcn: () => {
                console.log('click on 4')
            }
        },
        {
            title: 'Information Query',
            description: "根據QR Code查詢用戶的信息",

            clickfcn: () => {
                console.log('click on 5');
                navigate('/qrcode')

            }
        },
    ];




    return (
        <>
            <div>
                {/* <HeadBanner page={'home'} info={banner} /> */}
                <h1>Homepage</h1>
                <List
                    itemLayout="horizontal"
                    dataSource={listData}
                    renderItem={(item, index) => (
                        <List.Item>
                            <List.Item.Meta
                                onClick={() => item.clickfcn()}
                                // avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                                title={item.title}
                                description={item.description}
                            />
                        </List.Item>
                    )}
                />

                <Row>
                    <Button type="primary" danger size='large' style={{
                        margin: "20px auto",
                        width: "100%",
                    }}
                        onClick={() => {
                            //todo...
                            navigate('/login')
                        }}
                    >Logout</Button>
                </Row>

            </div>
        </>
    )
}


export default Homepage