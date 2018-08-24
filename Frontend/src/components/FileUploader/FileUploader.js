import { Upload, Icon, Modal } from 'antd';
import React,{Component} from 'react';
import {connect} from "react-redux";
import * as actionCreators from '../../store/actions/index';

class PicturesWall extends Component {
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [],
    };

    // cancel the image upload

    handleCancel = () => {

        this.setState({ previewVisible: false })

    };

    // do preview of image

    handlePreview = (file) => {

        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    };

    // change the images

    handleChange = ({ fileList }) => {

        const updateFileList=[];
        fileList.map((file,index)=>{
            const myFile=file;

            if(myFile.thumbUrl==='' || myFile.thumbUrl===null){

                myFile["status"]="done";
                myFile["error"]="";
                myFile.thumbUrl=file.thumbUrl;
                updateFileList.push(myFile);
            }else{
                myFile["status"]="done";
                myFile["error"]="";

                updateFileList.push(myFile);
            }
        })
        this.props.onHandleImageFiles(updateFileList);

        let totalSize=0;

        updateFileList.map(file=>{
            totalSize=totalSize+file.size/1000000;
        });
        this.setState({
            fileList:updateFileList
        })

    }

    // if there are any image all are show its first time

    componentDidMount(){

    }


    render() {

        const { previewVisible, previewImage, fileList } = this.state;


        let uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        let upload=(
            <Upload
                accept="image/*"
                listType="picture-card"
                fileList={fileList}
                onPreview={this.handlePreview}
                onChange={this.handleChange}
            >
                {fileList.length > 0 ? null : uploadButton}
            </Upload>
        );

        return (
            <div className="clearfix">
                {upload}
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {

        images:state.uploadRed.imageFile,

    }
};

const mapDispatchToProps=(dispatch)=>{
    return{
        onHandleImageFiles:(data)=>dispatch(actionCreators.uploadImageOnAction(data)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PicturesWall);
