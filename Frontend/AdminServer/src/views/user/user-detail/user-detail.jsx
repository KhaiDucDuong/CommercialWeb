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
import '../user.css'

// Hien thi thong tin cua don xin lam seller + thong tin cua user day
// Component cha sẽ truyền vào id của seller application , dựa vào id ấy gọi API lấy thông tin seller application và user
const UserDetails = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const location = useLocation()

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <CRow className="d-flex flex-row align-items-center">
          <CCol xs={6} sm={6} lg={6} className="justify-content-center">
            <h3 className="mb-0">User Details {location.state.id}</h3>
          </CCol>
        </CRow>
      </CCardHeader>
      <CCardBody>
        <h4>User Information</h4>
        <CRow className="mb-5">
          <CCol xs={12} sm={6} lg={6}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="UserId">User Id</CInputGroupText>
              <CFormInput aria-label="UserId" disabled value={location.state.id}></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={6}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="UserName">User name</CInputGroupText>
              <CFormInput aria-label="UserName" disabled value={location.state.name}></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={6}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="UserAddress">Address</CInputGroupText>
              <CFormInput aria-label="Address" disabled value="Hồ Chí Minh"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={6}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="UserEmail">Email</CInputGroupText>
              <CFormInput aria-label="UserEmail" disabled value="123@gmail.com"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={6}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="UserPhone">Phone Number</CInputGroupText>
              <CFormInput aria-label="UserPhone" disabled value="1234567890"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={6}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="UserDoB">Date of Birth</CInputGroupText>
              <CFormInput aria-label="UserDoB" disabled value="25/12/2003"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={6}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="UserRole">Role</CInputGroupText>
              <CFormInput aria-label="UserRole" disabled value="User"></CFormInput>
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
              <CInputGroupText id="updatedAt">Updated At</CInputGroupText>
              <CFormInput aria-label="updatedAt" disabled value="01/01/2024"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={6}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="Status">Status</CInputGroupText>
              <CFormInput aria-label="Status" disabled value="Pending"></CFormInput>
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
        <CButton>Ban</CButton>
      </CCardBody>
    </CCard>
  )
}

export default UserDetails
