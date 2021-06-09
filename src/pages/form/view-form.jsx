import React, { Component } from 'react';
import dayjs from 'dayjs';
import {
	Layout,
	Row,
	Col,
	Form,
	Select,
	Input,
	InputNumber,
	DatePicker,
	Button
} from 'antd';
import { PreRender, PageTitle, SelectApi, ButtonBack, FloatPanel } from '@src/components';
import { responsive_size, style_button, style_content } from '@src/style';
import { idrCurrencyFormatter, idrCurrencyParser } from '@src/utility/lib';
import { ArrowRightOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
// import { PRIVATE_ROUTE } from '@src/routes/path';
const { TextArea } = Input;
const { Content } = Layout;
class ViewForm extends Component {

	state = {
		loading: false,
		nama_job: undefined,
		jabatan: undefined,
		divisi: undefined,
		status_kepegawaian: undefined,
		gaji: undefined,
		pendidikan_terakhir: undefined,
		deskripsi_pekerjaan: undefined,
		experience: undefined,
		expired_date: undefined,

		tag: [],
		range_date: [ ]
	};

	inputHandler = ({ target }) => {
		this.setState({
			[ target.name ]: target.value !== '' ? target.value : undefined
		});
	}
	onSelectChange = ( value ) => {
		const name = Object.keys( value )[ 0 ];
		this.setState({[ name ]: value[name]});
	}
	onDateChange = async( value ) => {
		const name = Object.keys( value )[ 0 ];
		const selectedDate = dayjs(value[name]).format( 'YYYY-MM-DD' );
		this.setState({ [ name ]: selectedDate });
	}
	handleTag = ( value ) => {
		console.log( value );
		const tag = value.map(name => ({ name }));
		this.setState({ tag });
	}
	inputNumberHandler = ( value ) => {
		const name = Object.keys( value )[ 0 ];
		this.setState({[ name ]: value[name]});
	}
	onRangePickerChange = ( dates, dateStrings ) => {
		this.setState({ range_date: dates });
	}

	render( ) {
		const { loading, range_date } = this.state;
		return (
			<PreRender>
				<PageTitle>Form</PageTitle>
				<Content style={style_content}>
					<Form layout='vertical' size='large'>
						<FloatPanel
							left={( <ButtonBack/> )}
							right={(
							<Button
								loading={loading}
								size='large'
								type='primary'
								onClick={this.submitHandler}
								style={style_button}>
								Submit<ArrowRightOutlined/>
							</Button>
						)}
							offsetTop={0}/>
						<Row gutter={24} style={{
							marginTop: responsive_size
						}}>
							<Col span={12}>
								<Form.Item label='Input Name'>
									<Input
										allowClear
										name='nama_job'
										placeholder='your name'
										onChange={this.inputHandler}/>
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={24}>
							<Col span={12}>
								<Form.Item label='Position'>
									<SelectApi
										disableValueCache
										name={`select-divisi${ 1 }`}
										placeholder='Select Position'
										staticItems={[
										{
											id: 0,
											title: 'Front-end',
											value: 'front-end'
										}, {
											id: 1,
											title: 'Back-end',
											value: 'back-end'
										}
									]}
										onChange={( value ) => this.onSelectChange({ divisi: value })}/>
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={24}>
							<Col span={12}>
								<Form.Item label='Currency IDR'>
									<InputNumber
										size='large'
										style={{
										width: '100%'
									}}
										name='currency'
										formatter={idrCurrencyFormatter}
										parser={idrCurrencyParser}
										onChange={( value ) => this.inputNumberHandler({ gaji: value })}/>
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={24}>
							<Col span={12}>
								<Form.Item name='date' label='Date'>
									<DatePicker
										format='DD MMM YYYY'
										style={{
										width: '100%'
									}}
										placeholder='Select date'
										onSelect={( value ) => this.onDateChange({ expired_date: value })}/>
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={24} style={{marginBottom:24}}>
							<Col span={12}>
								<RangePicker
								style={{width:'100%'}}
									size='large'
									format='DD MMM YYYY'
									value={range_date}
									ranges={{
									Today: [
										dayjs( ), dayjs( )
									],
									'This Month': [
										dayjs( ).startOf( 'month' ),
										dayjs( ).endOf( 'month' )
									]
								}}
									onChange={this.onRangePickerChange}/>
							</Col>
						</Row>
						<Row gutter={24}>
							<Col span={12}>
								<RangePicker style={{width:'100%'}} size='large' picker="year"/>
							</Col>
						</Row>
						<Row gutter={24}>
							<Col span={12}>
								<Form.Item label='Description'>
									<TextArea
										style={{
										width: '100%'
									}}
										autoSize={{
										minRows: 3
									}}
										name='description_field'
										placeholder='Description field'
										onChange={this.inputHandler}/>
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={24}>
							<Col span={12}>
								<Form.Item label='Tags'>
									<Select
										mode='tags'
										style={{
										width: '100%'
									}}
										name='tag'
										placeholder='Tags'
										onChange={this.handleTag}/>
								</Form.Item>
							</Col>
						</Row>
					</Form>
				</Content>
			</PreRender>
		);
	}
}
export default ViewForm;