import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/core';

import {useStorage} from '../../hooks';
import {AppKey} from '../../config/Constants';
import {DRIVER_DETAILS, UPDATE_DETAILS} from '../../services/api';
import {BottomButton, ButtonText, SubHeading} from './Style';
import {Alert, BackHeader, ContainerAuth, Loader, TextInput} from '../../component';
import {showLog} from '../../utils';
import {useAuth} from '../../context';

export default () => {
    const {params} = useRoute();
    const navigation = useNavigation();
    const {user} = useAuth();
    const [bankName, setBankName] = useState();
    const [ifscCode, setIfscCode] = useState();
    const [branchName, setBranchName] = useState();
    const [showLoader, setShowLoader] = useState(false);
    const [settingNav, setSettingNav] = useState(false);
    const [bankAccountNo, setBankAccountNo] = useState();
    const {updateStorageItem, storageItem} = useStorage(AppKey.auth);
    const [loadData, setLoadData] = useState(false);

    useEffect(() => {
        if (params?.type) {
            setSettingNav(true);
            setLoadData(true);
        }
    }, [params]);

    if (loadData) {
        DRIVER_DETAILS(
            {
                driver_id: user?.driver_id,
            },
            response => {
                showLog('🚀 ~ file: RegisterThree.jsx ~ line 43 ~ updateDetails', response);
                setBankName(response?.bank_name);
                setBranchName(response?.branch_name);
                setBankAccountNo(response?.bank_account_no);
                setIfscCode(response?.ifsc);
                setLoadData(false);
            },
        );
    }

    const _handleComplete = () => {
        if (settingNav) {
            setShowLoader(true);
            UPDATE_DETAILS(
                {
                    user_id: storageItem?.id,
                    bank_name: bankName,
                    branch_name: branchName,
                    bank_account_no: bankAccountNo,
                    ifsc: ifscCode,
                },
                response => {
                    setShowLoader(false);
                    showLog('🚀 ~ file: RegisterFour.jsx ~ line 58 ~ updateDetails', response);
                    updateStorageItem(response);
                    navigation.goBack();
                },
            );
        } else {
            if (!bankName) {
                return Alert('Add your Bank Name');
            }
            if (!branchName) {
                return Alert('Add Branch Name');
            }
            if (!bankAccountNo) {
                return Alert('Add Your bank account Number');
            }
            if (!ifscCode) {
                return Alert('Add your ifsc Code');
            }

            setShowLoader(true);
            UPDATE_DETAILS(
                {
                    user_id: storageItem?.id,
                    bank_name: bankName,
                    branch_name: branchName,
                    bank_account_no: bankAccountNo,
                    ifsc: ifscCode,
                },
                response => {
                    setShowLoader(false);
                    showLog('🚀 ~ file: RegisterFour.jsx ~ line 62 ~ UpdateDetails', response);
                    updateStorageItem(response);
                    navigation.navigate('RootDrawer');
                },
            );
        }
    };
    return (
        <ContainerAuth
            styleLeft={{
                left: '-50%',
                top: '20%',
            }}
            styleRight={{
                bottom: '5%',
                right: '-67%',
                transform: [{rotate: '-10deg'}],
            }}>
            {showLoader ? <Loader /> : <></>}
            <BackHeader text="Payment Details" />
            <SubHeading>Your Payment details</SubHeading>
            <SubHeading
                style={{
                    marginTop: 0,
                    marginBottom: '10%',
                }}>
                to complete your KYC
            </SubHeading>
            <TextInput value={bankName} onTextChange={setBankName} placeholder="Bank Name" />
            <TextInput value={branchName} onTextChange={setBranchName} placeholder="Branch Name" />
            <TextInput value={bankAccountNo} onTextChange={setBankAccountNo} placeholder="Bank Account No." />
            <TextInput value={ifscCode} onTextChange={setIfscCode} placeholder="IFSC Code" />
            <BottomButton onPress={_handleComplete}>
                <ButtonText>{settingNav ? 'Update' : 'Next'}</ButtonText>
            </BottomButton>
        </ContainerAuth>
    );
};
