


import { Typography } from 'antd';

const { Text } = Typography;

// eslint-disable-next-line react/prop-types
const HeadBanner = ({ page, info }) => {

    return (
        <>
            <div style={{ width: '100%', paddingTop: '10px', paddingBottom: '10px', textAlign: 'center' }}>
                <Text italic strong type="secondary">Currect: {page} - {info}</Text>

            </div>
        </>
    )
}


export default HeadBanner