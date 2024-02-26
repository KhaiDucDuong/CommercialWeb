import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CLink,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CWidgetStatsB,
  CWidgetStatsC,
  CWidgetStatsE,
  CWidgetStatsF,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cilArrowRight,
  cilBasket,
  cilBell,
  cilChartPie,
  cilMoon,
  cilLaptop,
  cilPeople,
  cilSettings,
  cilSpeech,
  cilSpeedometer,
  cilUser,
  cilUserFollow,
} from '@coreui/icons'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import { DocsExample } from 'src/components'
import { Link } from 'react-router-dom'
import './createVoucher.css'
import Select from 'react-select'

const CreateVoucher = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const [productTypeSelectedOptions, setProductTypeSelectedOptions] = useState()
  const [shopSelectedOptions, setshopSelectedOptions] = useState()

  const productTypeList = [
    { value: '1', label: 'Laptop' },
    { value: '2', label: 'Phone' },
    { value: '3', label: 'Fresh meat' },
    { value: '4', label: 'Vegetables' },
    { value: '5', label: 'T-shirt' },
    { value: '6', label: 'Trousers' },
    { value: '7', label: 'Hat' },
    { value: '8', label: 'Car' },
    { value: '9', label: 'Bike' },
    { value: '10', label: 'TV' },
  ]

  const shopList = [
    { value: '1', label: 'Fahasa' },
    { value: '2', label: 'Apple' },
    { value: '3', label: 'Samsung' },
    { value: '4', label: 'Acer' },
    { value: '5', label: 'Logitech' },
    { value: '6', label: 'Toyota' },
    { value: '7', label: 'Uniqlo' },
    { value: '8', label: 'Việt Tiến' },
    { value: '9', label: 'Vittel' },
    { value: '10', label: 'Thegioididong' },
  ]

  function handleAppliedProductTypeSelect(data) {
    setProductTypeSelectedOptions(data)
  }

  function handleAppliedShopTypeSelect(data) {
    setshopSelectedOptions(data)
  }

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <CRow className="d-flex flex-row align-items-center">
          <CCol xs={6} sm={6} lg={6} className="justify-content-center">
            <h3 className="mb-0">Create Vouchers</h3>
          </CCol>
          <CCol xs={6} sm={6} lg={6} className="text-end">
            <CButton color="info" href="/Vouchers">
              <Link to="/vouchers" style={{ textDecoration: 'none' }}>
                <h4 className="mb-0" style={{ color: 'white' }}>
                  Go back
                </h4>
              </Link>
            </CButton>
          </CCol>
        </CRow>
      </CCardHeader>
      <CCardBody>
        <CForm>
          <CRow className="mb-3">
            <CFormLabel htmlFor="voucherName" className="col-sm-2 col-form-label">
              Name
            </CFormLabel>
            <CCol sm={10}>
              <CFormInput type="text" id="voucherName" />
            </CCol>
          </CRow>

          <CRow className="mb-3">
            <CFormLabel htmlFor="voucherValue" className="col-sm-2 col-form-label">
              Value
            </CFormLabel>
            <CCol sm={10}>
              <CFormInput
                type="number"
                id="voucherValue"
                min="0"
                max="999999999"
                onWheel={() => document.activeElement.blur()}
              />
            </CCol>
          </CRow>

          <CRow className="mb-3">
            <CFormLabel htmlFor="voucherAppliedProducts" className="col-sm-2 col-form-label">
              Applied Products
            </CFormLabel>
            <CCol sm={10}>
              <Select
                options={productTypeList}
                placeholder="Select Product Types"
                value={productTypeSelectedOptions}
                onChange={handleAppliedProductTypeSelect}
                isSearchable={true}
                isMulti
              />
            </CCol>
          </CRow>

          <CRow className="mb-3">
            <CFormLabel htmlFor="voucherAppliedShops" className="col-sm-2 col-form-label">
              Applied Shops
            </CFormLabel>
            <CCol sm={10}>
              <Select
                options={shopList}
                placeholder="Select Shops"
                value={shopSelectedOptions}
                onChange={handleAppliedShopTypeSelect}
                isSearchable={true}
                isMulti
              />
            </CCol>
          </CRow>

          <CRow className="mb-3">
            <CFormLabel htmlFor="voucherNoHandout" className="col-sm-2 col-form-label">
              No. Handout
            </CFormLabel>
            <CCol sm={10}>
              <CFormInput
                type="number"
                id="voucherNoHandout"
                min="0"
                max="999999999"
                onWheel={() => document.activeElement.blur()}
              />
            </CCol>
          </CRow>

          <CRow className="mb-3">
            <CFormLabel htmlFor="voucherDescription" className="col-sm-2 col-form-label">
              Description
            </CFormLabel>
            <CCol sm={10}>
              <CFormTextarea id="voucherDescriptionTextArea" rows="5"></CFormTextarea>
            </CCol>
          </CRow>

          <CRow className="mb-3">
            <CFormLabel htmlFor="voucherExpiredDate" className="col-sm-2 col-form-label">
              Expired Date
            </CFormLabel>
            <CCol sm={10}>
              <CFormInput type="date" id="voucherExpiredDate" />
            </CCol>
          </CRow>
        </CForm>
        <CRow>
          <CCol xs={12} sm={12} lg={12} className="text-end">
            <CButton type="submit" className="mb-3">
              Submit
            </CButton>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  )
}

export default CreateVoucher
