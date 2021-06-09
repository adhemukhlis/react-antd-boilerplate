import React from 'react';
import { Layout, Button } from 'antd';
import { DisplayDate, distinctArray } from '../../utility/utility';
import { TableComponent,PageTitle,TablePanel,ButtonEditDelete } from '../../components';
import { style_content } from '../../style';
import { PlusOutlined, SettingOutlined } from '@ant-design/icons';

const { Content } = Layout;
const ViewDashboard = ( ) => {
	const age_array = TableData.filter( obj => obj.age !== undefined && obj.age !== null && obj.age !== '' && typeof( obj.age ) !== 'boolean' ).map( obj => obj.age );
	const age_array_distinct = distinctArray( age_array ).sort( );
	const column_data = [
		{
			title: 'No.',
			dataIndex: 'no',
			align: 'center',
			render: ( value, row, index ) => index + 1,
			width: '6%'
		}, {
			title: 'Name',
			dataIndex: 'name',
			searchOption: true
		}, {
			title: 'Email',
			dataIndex: 'email'
		}, {
			title: 'Age',
			dataIndex: 'age',
			sortOption: 'number',
			filterOption: age_array_distinct.map(value => ({ value, text: value }))
		}, {
			title: 'Join Date',
			dataIndex: 'joinDate',
			sortOption: 'date',
			render: date => DisplayDate( date )
		}, {
			title: <SettingOutlined/>,
			align: 'center',
			width: '10%',
			render: ({ id, nama_training_category, divisi_name }) => ( <ButtonEditDelete
				item={nama_training_category}
				onDelete={( ) => {}}
				onEdit={( ) => {}}/> )
		}
	];
	return (
		<div style={{
			display: 'flex',
			flex: 1,
			flexDirection: 'column'
		}}>
			<PageTitle>Dashboard</PageTitle>
			<Content style={style_content}>
				<TablePanel left={( <ButtonAdd onClick={( ) => {}}/> )}/>
				<TableComponent
					rowKey='id'
					noFixed
					rowHeight={56}
					columns={column_data}
					dataSource={TableData}
					loading={false}/>
			</Content>
		</div>
	);
}
const TableData = [
	{
		name: "John",
		email: "john13@an.com",
		gender: "male",
		age: "26",
		joinDate: "2020-06-12"
	}, {
		name: "Marsya",
		email: "marsy4@an.com",
		gender: "female",
		age: "22",
		joinDate: "2019-04-24"
	}, {
		name: "Roger",
		email: "rgero@an.com",
		gender: "male",
		age: "28",
		joinDate: "2016-11-02"
	}, {
		name: "Fin",
		email: "fin66@an.com",
		gender: "male",
		age: "21",
		joinDate: "2018-02-21"
	}, {
		name: "Diandra",
		email: "diandraa@an.com",
		gender: "female",
		age: "25",
		joinDate: "2020-01-16"
	}, {
		name: "Ezra",
		email: "sheridan.glover@corkery.com",
		gender: "male",
		age: "22",
		joinDate: "2016-09-05"
	}, {
		name: "Vino",
		email: "vino@an.com",
		gender: "male",
		age: "21",
		joinDate: "2019-01-29"
	}, {
		name: "Gerard",
		email: "gerard@an.com",
		gender: "male",
		age: "24",
		joinDate: "2020-10-13"
	}, {
		name: "Evelyn",
		email: "evelynn3@an.com",
		gender: "female",
		age: "25",
		joinDate: "2019-05-20"
	}, {
		name: "Eva",
		email: "evae@an.com",
		gender: "female",
		age: "21",
		joinDate: "2020-07-22"
	}, {
		name: "Lyodra",
		email: "lyoodra@an.com",
		gender: "female",
		age: "26",
		joinDate: "2021-04-11"
	}, {
		name: "Michael",
		email: "michael77@an.com",
		gender: "male",
		age: "26",
		joinDate: "2021-08-28"
	}
];
const ButtonAdd = ({ onClick }) => (
	<Button size='large' onClick={onClick} type='default' icon={< PlusOutlined />}>
		Add
	</Button>
);
export default ViewDashboard;