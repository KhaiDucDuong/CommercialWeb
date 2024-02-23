import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader,
  CCol,
  CFormInput,
  CFormSelect,
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
import { Link, useLocation } from 'react-router-dom'
import '../seller-application.css'

// Hien thi thong tin cua don xin lam seller + thong tin cua user day
// Component cha sẽ truyền vào id của seller application , dựa vào id ấy gọi API lấy thông tin seller application và user
const SellerApplicationDetails = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const location = useLocation()

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <CRow className="d-flex flex-row align-items-center">
          <CCol xs={6} sm={6} lg={6} className="justify-content-center">
            <h3 className="mb-0">Seller Application Details {location.state.id}</h3>
          </CCol>
        </CRow>
      </CCardHeader>
      <CCardBody>
        <h4>Application</h4>
        <CRow className="mb-5">
          <CCol xs={12} sm={6} lg={6}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="ApplicationId">Application Id</CInputGroupText>
              <CFormInput
                aria-label="ApplicationId"
                disabled
                value={location.state.id}
              ></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={6}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="ShopName">Shop Name</CInputGroupText>
              <CFormInput aria-label="ShopName" disabled value={location.state.name}></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={6}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="ShopLocation">Shop Location</CInputGroupText>
              <CFormInput aria-label="ShopLocation" disabled value="Dummy Location"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={6}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="ShopProducts">Registered Products</CInputGroupText>
              <CFormInput aria-label="ShopProducts" disabled value="Dummy Products"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={6}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="createdAt">Created At</CInputGroupText>
              <CFormInput aria-label="createdAt" disabled value="01/01/2024"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={6}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="Status">Status</CInputGroupText>
              <CFormInput aria-label="Status" disabled value="Pending"></CFormInput>
            </CInputGroup>
          </CCol>
        </CRow>

        <h4>User</h4>
        <CRow className="mb-5">
          <CCol xs={12} sm={6} lg={6}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="UserId">User Id</CInputGroupText>
              <CFormInput aria-label="UserId" disabled value="Dummy User"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={6}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="Email">Email</CInputGroupText>
              <CFormInput aria-label="Email" disabled value="dummy@gmail.com"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={6}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="DateOfBirth">Date Of Birth</CInputGroupText>
              <CFormInput aria-label="DateOfBirth" disabled value="04/10/2000"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={6}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="PhoneNo">Phone Number</CInputGroupText>
              <CFormInput aria-label="PhoneNo" disabled value="090123456"></CFormInput>
            </CInputGroup>
          </CCol>
        </CRow>

        <CRow className="mb-5">
          <CCol xs={12} sm={6} lg={6}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="ApplicationApprovalStatusInput">Approval Status</CInputGroupText>
              <CFormSelect aria-label="ApplicationApprovalStatusInput">
                <option value="1">Accepted</option>
                <option value="2" selected>
                  Denied
                </option>
              </CFormSelect>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={3} lg={2} className="text-end">
            <CButton type="submit" className="mb-3">
              Update Status
            </CButton>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  )
}

export default SellerApplicationDetails
