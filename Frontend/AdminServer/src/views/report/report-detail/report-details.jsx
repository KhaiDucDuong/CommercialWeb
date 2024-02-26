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
import '../report.css'

// Hien thi thong tin cua don xin lam seller + thong tin cua user day
// Component cha sẽ truyền vào id của seller application , dựa vào id ấy gọi API lấy thông tin seller application và user
const ReportDetails = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const location = useLocation()

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <CRow className="d-flex flex-row align-items-center">
          <CCol xs={6} sm={6} lg={6} className="justify-content-center">
            <h3 className="mb-0">Report ID {location.state.id}</h3>
          </CCol>
        </CRow>
      </CCardHeader>
      <CCardBody>
        <h4>Report Detail</h4>
        <CRow className="mb-5">
          <CCol xs={12} sm={6} lg={6}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="ReportId">Report Id</CInputGroupText>
              <CFormInput aria-label="ReportId" disabled value={location.state.id}></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={6}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="Content">Content</CInputGroupText>
              <CFormInput aria-label="Content" disabled value="Hông có ý kiến gì cả"></CFormInput>
            </CInputGroup>
          </CCol>
          <CCol xs={12} sm={6} lg={6}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="Image">Image</CInputGroupText>
              <CFormInput aria-label="Image" disabled value="add picture"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={6}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="Owner">Owner</CInputGroupText>
              <CFormInput aria-label="Owner" disabled value={location.state.name}></CFormInput>
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

          <CCol xs={12} sm={3} lg={2} className="text-end">
            <CButton type="submit" className="mb-3">
              Go to the shop
            </CButton>
          </CCol>
        </CRow>
        <CButton>Ban</CButton>
      </CCardBody>
    </CCard>
  )
}

export default ReportDetails
