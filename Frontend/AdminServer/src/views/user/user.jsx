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
import './user.css'
import SellerApplicationDetails from './user-detail/user-detail'

const Users = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const navigate = useNavigate()

  function viewUserDetails(user) {
    navigate(`/user/${user.id}`, {
      state: { id: user.id, name: user.name },
    })
  }

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <CRow className="d-flex flex-row align-items-center">
          <CCol xs={6} sm={6} lg={6} className="justify-content-center">
            <h3 className="mb-0">User</h3>
          </CCol>
        </CRow>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="UserIdInput">User Id</CInputGroupText>
              <CFormInput aria-label="UserIdInput"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="UserNameInput">User name</CInputGroupText>
              <CFormInput aria-label="UserNameInput"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="UserEmailInput">Email</CInputGroupText>
              <CFormInput aria-label="UserEmailInput"></CFormInput>
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

          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="UserAddressInput">Address</CInputGroupText>
              <CFormInput aria-label="UserAddressInput"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="UserDoBInput">Date of Birth</CInputGroupText>
              <CFormInput type="date" aria-label="UserDoBInput"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="UserRoleInput">Role</CInputGroupText>
              <CFormInput aria-label="UserRoleInput"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="UserPhoneInput">Phone Number</CInputGroupText>
              <CFormInput
                aria-label="UserPhoneInput"
                type="number"
                onWheel={() => document.activeElement.blur()}
              ></CFormInput>
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
              <CTableHeaderCell scope="col">User name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Address</CTableHeaderCell>
              <CTableHeaderCell scope="col">Email</CTableHeaderCell>
              <CTableHeaderCell scope="col">Created At</CTableHeaderCell>
              <CTableHeaderCell scope="col">Updated At</CTableHeaderCell>
              <CTableHeaderCell scope="col"></CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>Trần Sơn Hoàng</CTableDataCell>
              <CTableDataCell>Bồng Sơn, Hoài Nhơn, Bình Định</CTableDataCell>
              <CTableDataCell>Tsh251203@gmail.com</CTableDataCell>
              <CTableDataCell>25/12/2003</CTableDataCell>
              <CTableDataCell>25/12/2003</CTableDataCell>
              <CTableDataCell>
                <CButton
                  className="mb-3"
                  onClick={() => {
                    viewUserDetails({ id: '174b8j6', name: 'Tran Son Hoang' })
                  }}
                >
                  Details
                </CButton>
              </CTableDataCell>
            </CTableRow>

            <CTableRow>
              <CTableHeaderCell scope="row">2</CTableHeaderCell>
              <CTableDataCell>Trần Sơn Huy</CTableDataCell>
              <CTableDataCell>Bồng Sơn, Hoài Nhơn, Bình Định</CTableDataCell>
              <CTableDataCell>Tshuy251203@gmail.com</CTableDataCell>
              <CTableDataCell>2/12/2003</CTableDataCell>
              <CTableDataCell>2/12/2003</CTableDataCell>
              <CTableDataCell>
                <CButton
                  className="mb-3"
                  onClick={() => {
                    viewUserDetails({ id: '8d9bwx', name: 'Tran Son Huy' })
                  }}
                >
                  Details
                </CButton>
              </CTableDataCell>
            </CTableRow>

            <CTableRow>
              <CTableHeaderCell scope="row">3</CTableHeaderCell>
              <CTableDataCell>Ngô Đình Huy</CTableDataCell>
              <CTableDataCell>Bồng Sơn, Hoài Nhơn, Bình Định</CTableDataCell>
              <CTableDataCell>NđH251203@gmail.com</CTableDataCell>
              <CTableDataCell>25/12/2003</CTableDataCell>
              <CTableDataCell>25/12/2003</CTableDataCell>
              <CTableDataCell>
                <CButton
                  className="mb-3"
                  onClick={() => {
                    viewUserDetails({ id: 'dummy id', name: 'Ngo Dinh Huy' })
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

export default Users
