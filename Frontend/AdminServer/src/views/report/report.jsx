import React, { useState, Component } from 'react'
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
import { DocsExample } from 'src/components'
import { Link, useNavigate } from 'react-router-dom'
import './report.css'
import SellerApplicationDetails from './report-detail/report-details'

const Reports = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const navigate = useNavigate()

  function viewReportDetail(report) {
    navigate(`/report/${report.id}`, {
      state: { id: report.id, name: report.name },
    })
  }

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <CRow className="d-flex flex-row align-items-center">
          <CCol xs={6} sm={6} lg={6} className="justify-content-center">
            <h3 className="mb-0">Report</h3>
          </CCol>
        </CRow>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="ReportIdInput">Report Id</CInputGroupText>
              <CFormInput aria-label="ReportIdInput"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="Content">Content</CInputGroupText>
              <CFormInput aria-label="Content"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="OwnerId">Owner</CInputGroupText>
              <CFormInput aria-label="OwnerId"></CFormInput>
            </CInputGroup>
          </CCol>
          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="UserCreatedDateInput">Created Date</CInputGroupText>
              <CFormInput type="date" aria-label="UserCreatedDateInput"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="UserUpdatedDateInput">Updated Date</CInputGroupText>
              <CFormInput type="date" aria-label="UserUpdatedDateInput"></CFormInput>
            </CInputGroup>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs={12} sm={12} lg={12} className="text-end">
            <CButton type="submit" className="mb-3">
              Search
            </CButton>
          </CCol>
        </CRow>

        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">Content</CTableHeaderCell>
              <CTableHeaderCell scope="col">Owner</CTableHeaderCell>
              <CTableHeaderCell scope="col">Created At</CTableHeaderCell>
              <CTableHeaderCell scope="col">Updated At</CTableHeaderCell>
              <CTableHeaderCell scope="col"></CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>Shop như qq</CTableDataCell>
              <CTableDataCell>Nguyễn Mạnh Tiến</CTableDataCell>
              <CTableDataCell>25/12/2003</CTableDataCell>
              <CTableDataCell>25/12/2003</CTableDataCell>
              <CTableDataCell>
                <CButton
                  className="mb-3"
                  onClick={() => {
                    viewReportDetail({ id: '174b8j6', name: 'Nguyen Manh Tien' })
                  }}
                >
                  Details
                </CButton>
              </CTableDataCell>
            </CTableRow>

            <CTableRow>
              <CTableHeaderCell scope="row">2</CTableHeaderCell>
              <CTableDataCell>Ngô Đình Huy lỏ vãi</CTableDataCell>
              <CTableDataCell>Trần Sơn Hoàng</CTableDataCell>
              <CTableDataCell>2/12/2003</CTableDataCell>
              <CTableDataCell>2/12/2003</CTableDataCell>
              <CTableDataCell>
                <CButton
                  className="mb-3"
                  onClick={() => {
                    viewReportDetail({ id: '8d9bwx', name: 'Tran Son Hoang' })
                  }}
                >
                  Details
                </CButton>
              </CTableDataCell>
            </CTableRow>

            <CTableRow>
              <CTableHeaderCell scope="row">3</CTableHeaderCell>
              <CTableDataCell>Ngô Đình Huy lại lỏ ròi</CTableDataCell>
              <CTableDataCell>Giấu mặt</CTableDataCell>
              <CTableDataCell>25/12/2003</CTableDataCell>
              <CTableDataCell>25/12/2003</CTableDataCell>
              <CTableDataCell>
                <CButton
                  className="mb-3"
                  onClick={() => {
                    viewReportDetail({ id: 'dummy id', name: 'Giấu mặt' })
                  }}
                >
                  Details
                </CButton>
              </CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}

export default Reports
