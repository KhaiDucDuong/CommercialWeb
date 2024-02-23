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
import './seller-application.css'
import SellerApplicationDetails from './seller application details/seller-application-details'

const SellerApplication = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const navigate = useNavigate()

  function viewApplicationDetails(application) {
    navigate(`/seller-application/${application.id}`, {
      state: { id: application.id, name: application.name },
    })
  }

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <CRow className="d-flex flex-row align-items-center">
          <CCol xs={6} sm={6} lg={6} className="justify-content-center">
            <h3 className="mb-0">Seller Applications</h3>
          </CCol>
        </CRow>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="ApplicationIdInput">Application Id</CInputGroupText>
              <CFormInput aria-label="ApplicationIdInput"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="ApplicationShopNameInput">Shop name</CInputGroupText>
              <CFormInput aria-label="ApplicationShopNameInput"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="ApplicationApprovalStatusInput">Approval Status</CInputGroupText>
              <CFormSelect aria-label="ApplicationApprovalStatusInput">
                <option value="0">Pending</option>
                <option value="1">Accepted</option>
                <option value="2">Denied</option>
                <option value="3">Deleted</option>
              </CFormSelect>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="ApplicationUserNameInput">{"User's name"}</CInputGroupText>
              <CFormInput aria-label="ApplicationUserNameInput"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="ApplicationEmailInput">Email</CInputGroupText>
              <CFormInput aria-label="ApplicationEmailInput"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="ApplicationCreatedDateInput">Created Date</CInputGroupText>
              <CFormInput type="date" aria-label="ApplicationCreatedDateInput"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="ApplicationPhoneInput">Phone Number</CInputGroupText>
              <CFormInput
                aria-label="ApplicationPhoneInput"
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
              <CTableHeaderCell scope="col">Shop name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Created At</CTableHeaderCell>
              <CTableHeaderCell scope="col">User</CTableHeaderCell>
              <CTableHeaderCell scope="col">Email</CTableHeaderCell>
              <CTableHeaderCell scope="col">Phone No</CTableHeaderCell>
              <CTableHeaderCell scope="col">Status</CTableHeaderCell>
              <CTableHeaderCell scope="col"></CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>Adidas</CTableDataCell>
              <CTableDataCell>20/02/2024</CTableDataCell>
              <CTableDataCell>Johnny G.</CTableDataCell>
              <CTableDataCell>johnny@gmail.com</CTableDataCell>
              <CTableDataCell>0999888777</CTableDataCell>
              <CTableDataCell>Pending</CTableDataCell>
              <CTableDataCell>
                <CButton
                  className="mb-3"
                  onClick={() => {
                    viewApplicationDetails({ id: '174b8j6', name: 'Adidas' })
                  }}
                >
                  Details
                </CButton>
              </CTableDataCell>
            </CTableRow>

            <CTableRow>
              <CTableHeaderCell scope="row">2</CTableHeaderCell>
              <CTableDataCell>Quần áo Trang</CTableDataCell>
              <CTableDataCell>18/02/2024</CTableDataCell>
              <CTableDataCell>Trang Như</CTableDataCell>
              <CTableDataCell>trang@gmail.com</CTableDataCell>
              <CTableDataCell>0111133332</CTableDataCell>
              <CTableDataCell>Accepted</CTableDataCell>
              <CTableDataCell>
                <CButton
                  className="mb-3"
                  onClick={() => {
                    viewApplicationDetails({ id: '8d9bwx', name: 'Quan ao Trang' })
                  }}
                >
                  Details
                </CButton>
              </CTableDataCell>
            </CTableRow>

            <CTableRow>
              <CTableHeaderCell scope="row">3</CTableHeaderCell>
              <CTableDataCell>Dummy Shop</CTableDataCell>
              <CTableDataCell>21/02/2024</CTableDataCell>
              <CTableDataCell>Dummy User</CTableDataCell>
              <CTableDataCell>dummy@gmail.com</CTableDataCell>
              <CTableDataCell>000099998888</CTableDataCell>
              <CTableDataCell>Rejected</CTableDataCell>
              <CTableDataCell>
                <CButton
                  className="mb-3"
                  onClick={() => {
                    viewApplicationDetails({ id: 'dummy id', name: 'Dummy shop' })
                  }}
                >
                  Details
                </CButton>
              </CTableDataCell>
            </CTableRow>

            <CTableRow>
              <CTableHeaderCell scope="row">4</CTableHeaderCell>
              <CTableDataCell>Dummy Shop</CTableDataCell>
              <CTableDataCell>21/02/2024</CTableDataCell>
              <CTableDataCell>Dummy User</CTableDataCell>
              <CTableDataCell>dummy@gmail.com</CTableDataCell>
              <CTableDataCell>000099998888</CTableDataCell>
              <CTableDataCell>Deleted</CTableDataCell>
              <CTableDataCell>
                <CButton
                  className="mb-3"
                  onClick={() => {
                    viewApplicationDetails({ id: 'dummy id', name: 'Dummy shop' })
                  }}
                >
                  Details
                </CButton>
              </CTableDataCell>
            </CTableRow>

            <CTableRow>
              <CTableHeaderCell scope="row">5</CTableHeaderCell>
              <CTableDataCell>Dummy Shop</CTableDataCell>
              <CTableDataCell>21/02/2024</CTableDataCell>
              <CTableDataCell>Dummy User</CTableDataCell>
              <CTableDataCell>dummy@gmail.com</CTableDataCell>
              <CTableDataCell>000099998888</CTableDataCell>
              <CTableDataCell>Rejected</CTableDataCell>
              <CTableDataCell>
                <CButton
                  className="mb-3"
                  onClick={() => {
                    viewApplicationDetails({ id: 'dummy id', name: 'Dummy shop' })
                  }}
                >
                  Details
                </CButton>
              </CTableDataCell>
            </CTableRow>

            <CTableRow>
              <CTableHeaderCell scope="row">6</CTableHeaderCell>
              <CTableDataCell>Dummy Shop</CTableDataCell>
              <CTableDataCell>21/02/2024</CTableDataCell>
              <CTableDataCell>Dummy User</CTableDataCell>
              <CTableDataCell>dummy@gmail.com</CTableDataCell>
              <CTableDataCell>000099998888</CTableDataCell>
              <CTableDataCell>Rejected</CTableDataCell>
              <CTableDataCell>
                <CButton
                  className="mb-3"
                  onClick={() => {
                    viewApplicationDetails({ id: 'dummy id', name: 'Dummy shop' })
                  }}
                >
                  Details
                </CButton>
              </CTableDataCell>
            </CTableRow>

            <CTableRow>
              <CTableHeaderCell scope="row">7</CTableHeaderCell>
              <CTableDataCell>Dummy Shop</CTableDataCell>
              <CTableDataCell>21/02/2024</CTableDataCell>
              <CTableDataCell>Dummy User</CTableDataCell>
              <CTableDataCell>dummy@gmail.com</CTableDataCell>
              <CTableDataCell>000099998888</CTableDataCell>
              <CTableDataCell>Rejected</CTableDataCell>
              <CTableDataCell>
                <CButton
                  className="mb-3"
                  onClick={() => {
                    viewApplicationDetails({ id: 'dummy id', name: 'Dummy shop' })
                  }}
                >
                  Details
                </CButton>
              </CTableDataCell>
            </CTableRow>

            <CTableRow>
              <CTableHeaderCell scope="row">8</CTableHeaderCell>
              <CTableDataCell>Dummy Shop</CTableDataCell>
              <CTableDataCell>21/02/2024</CTableDataCell>
              <CTableDataCell>Dummy User</CTableDataCell>
              <CTableDataCell>dummy@gmail.com</CTableDataCell>
              <CTableDataCell>000099998888</CTableDataCell>
              <CTableDataCell>Rejected</CTableDataCell>
              <CTableDataCell>
                <CButton type="submit" className="mb-3">
                  Details
                </CButton>
              </CTableDataCell>
            </CTableRow>

            <CTableRow>
              <CTableHeaderCell scope="row">9</CTableHeaderCell>
              <CTableDataCell>Dummy Shop</CTableDataCell>
              <CTableDataCell>21/02/2024</CTableDataCell>
              <CTableDataCell>Dummy User</CTableDataCell>
              <CTableDataCell>dummy@gmail.com</CTableDataCell>
              <CTableDataCell>000099998888</CTableDataCell>
              <CTableDataCell>Rejected</CTableDataCell>
              <CTableDataCell>
                <CButton
                  className="mb-3"
                  onClick={() => {
                    viewApplicationDetails({ id: 'dummy id', name: 'Dummy shop' })
                  }}
                >
                  Details
                </CButton>
              </CTableDataCell>
            </CTableRow>

            <CTableRow>
              <CTableHeaderCell scope="row">10</CTableHeaderCell>
              <CTableDataCell>Dummy Shop</CTableDataCell>
              <CTableDataCell>21/02/2024</CTableDataCell>
              <CTableDataCell>Dummy User</CTableDataCell>
              <CTableDataCell>dummy@gmail.com</CTableDataCell>
              <CTableDataCell>000099998888</CTableDataCell>
              <CTableDataCell>Rejected</CTableDataCell>
              <CTableDataCell>
                <CButton
                  className="mb-3"
                  onClick={() => {
                    viewApplicationDetails({ id: 'dummy id', name: 'Dummy shop' })
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

export default SellerApplication
