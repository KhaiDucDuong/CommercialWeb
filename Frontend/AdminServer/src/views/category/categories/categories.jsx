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
import { DocsExample } from 'src/components'
import { Link } from 'react-router-dom'

const Categories = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <CRow className="d-flex flex-row align-items-center">
          <CCol xs={6} sm={6} lg={6} className="justify-content-center">
            <h3 className="mb-0">Vouchers Management</h3>
          </CCol>
          <CCol xs={6} sm={6} lg={6} className="text-end">
            <CButton color="info">
              <Link to="/vouchers/create-voucher" style={{ textDecoration: 'none' }}>
                <h4 className="mb-0" style={{ color: 'white' }}>
                  Create a new voucher
                </h4>
              </Link>
            </CButton>
          </CCol>
        </CRow>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="VoucherNameInput">Voucher Name</CInputGroupText>
              <CFormInput aria-label="VoucherNameInput" placeholder="voucher name"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="VoucherTypeSelect">Product Type</CInputGroupText>
              <CFormSelect aria-label="VoucherTypeSelect">
                <option value="0">All</option>
                <option value="1">Fresh Produce</option>
                <option value="2">Electronics</option>
                <option value="3">Toys</option>
                <option value="4">Furniture</option>
              </CFormSelect>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="ForShopInput">Applied Shop</CInputGroupText>
              <CFormInput aria-label="ForShopInput" placeholder="shop name"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="CreatedDateInput">Created Date</CInputGroupText>
              <CFormInput type="date" aria-label="CreatedDateInput"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="ExpireDateInput">Expire Date</CInputGroupText>
              <CFormInput type="date" aria-label="ExpireDateInput"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="VoucherStatusSelect">Voucher Status</CInputGroupText>
              <CFormSelect aria-label="VoucherStatusSelect">
                <option value="0">Valid</option>
                <option value="1">Expired</option>
                <option value="2">Deleted</option>
              </CFormSelect>
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
              <CTableHeaderCell scope="col">Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Value</CTableHeaderCell>
              <CTableHeaderCell scope="col">Description</CTableHeaderCell>
              <CTableHeaderCell scope="col">Applied Products</CTableHeaderCell>
              <CTableHeaderCell scope="col">Applied Shops</CTableHeaderCell>
              <CTableHeaderCell scope="col">Created At</CTableHeaderCell>
              <CTableHeaderCell scope="col">Expired At</CTableHeaderCell>
              <CTableHeaderCell scope="col">Status</CTableHeaderCell>
              <CTableHeaderCell scope="col">No. Handouts</CTableHeaderCell>
              <CTableHeaderCell scope="col">No. Available</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>BF E 24</CTableDataCell>
              <CTableDataCell>50000</CTableDataCell>
              <CTableDataCell>
                Voucher for electronics products, valid during 2023 blackfriday week.
              </CTableDataCell>
              <CTableDataCell>Electronics</CTableDataCell>
              <CTableDataCell>All</CTableDataCell>
              <CTableDataCell>16/11/2023</CTableDataCell>
              <CTableDataCell>23/11/2023</CTableDataCell>
              <CTableDataCell>Expired</CTableDataCell>
              <CTableDataCell>2000</CTableDataCell>
              <CTableDataCell>0</CTableDataCell>
            </CTableRow>

            <CTableRow>
              <CTableHeaderCell scope="row">2</CTableHeaderCell>
              <CTableDataCell>NY FUR 24</CTableDataCell>
              <CTableDataCell>100000</CTableDataCell>
              <CTableDataCell>
                Voucher for Furniture products, valid from 1/1/2024 to 10/1/2024.
              </CTableDataCell>
              <CTableDataCell>Furniture</CTableDataCell>
              <CTableDataCell>All</CTableDataCell>
              <CTableDataCell>1/1/2024</CTableDataCell>
              <CTableDataCell>10/1/2024</CTableDataCell>
              <CTableDataCell>Expired</CTableDataCell>
              <CTableDataCell>3000</CTableDataCell>
              <CTableDataCell>0</CTableDataCell>
            </CTableRow>

            <CTableRow>
              <CTableHeaderCell scope="row">3</CTableHeaderCell>
              <CTableDataCell>EMILY V13</CTableDataCell>
              <CTableDataCell>20000</CTableDataCell>
              <CTableDataCell>
                Voucher for Emily store, valid from 10/2/2024 to 14/2/2024.
              </CTableDataCell>
              <CTableDataCell>All</CTableDataCell>
              <CTableDataCell>Emily-2411</CTableDataCell>
              <CTableDataCell>10/2/2024</CTableDataCell>
              <CTableDataCell>14/2/2024</CTableDataCell>
              <CTableDataCell>Valid</CTableDataCell>
              <CTableDataCell>100</CTableDataCell>
              <CTableDataCell>3</CTableDataCell>
            </CTableRow>

            <CTableRow>
              <CTableHeaderCell scope="row">4</CTableHeaderCell>
              <CTableDataCell>DUMMY V1</CTableDataCell>
              <CTableDataCell>100000</CTableDataCell>
              <CTableDataCell>This is a dummy voucher.</CTableDataCell>
              <CTableDataCell>All</CTableDataCell>
              <CTableDataCell>All</CTableDataCell>
              <CTableDataCell>1/1/2024</CTableDataCell>
              <CTableDataCell>31/12/2024</CTableDataCell>
              <CTableDataCell>Valid</CTableDataCell>
              <CTableDataCell>1000</CTableDataCell>
              <CTableDataCell>578</CTableDataCell>
            </CTableRow>

            <CTableRow>
              <CTableHeaderCell scope="row">5</CTableHeaderCell>
              <CTableDataCell>DUMMY V1</CTableDataCell>
              <CTableDataCell>100000</CTableDataCell>
              <CTableDataCell>This is a dummy voucher.</CTableDataCell>
              <CTableDataCell>All</CTableDataCell>
              <CTableDataCell>All</CTableDataCell>
              <CTableDataCell>1/1/2024</CTableDataCell>
              <CTableDataCell>31/12/2024</CTableDataCell>
              <CTableDataCell>Valid</CTableDataCell>
              <CTableDataCell>1000</CTableDataCell>
              <CTableDataCell>578</CTableDataCell>
            </CTableRow>

            <CTableRow>
              <CTableHeaderCell scope="row">6</CTableHeaderCell>
              <CTableDataCell>DUMMY V1</CTableDataCell>
              <CTableDataCell>100000</CTableDataCell>
              <CTableDataCell>This is a dummy voucher.</CTableDataCell>
              <CTableDataCell>All</CTableDataCell>
              <CTableDataCell>All</CTableDataCell>
              <CTableDataCell>1/1/2024</CTableDataCell>
              <CTableDataCell>31/12/2024</CTableDataCell>
              <CTableDataCell>Valid</CTableDataCell>
              <CTableDataCell>1000</CTableDataCell>
              <CTableDataCell>578</CTableDataCell>
            </CTableRow>

            <CTableRow>
              <CTableHeaderCell scope="row">7</CTableHeaderCell>
              <CTableDataCell>DUMMY V1</CTableDataCell>
              <CTableDataCell>100000</CTableDataCell>
              <CTableDataCell>This is a dummy voucher.</CTableDataCell>
              <CTableDataCell>All</CTableDataCell>
              <CTableDataCell>All</CTableDataCell>
              <CTableDataCell>1/1/2024</CTableDataCell>
              <CTableDataCell>31/12/2024</CTableDataCell>
              <CTableDataCell>Valid</CTableDataCell>
              <CTableDataCell>1000</CTableDataCell>
              <CTableDataCell>578</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}

export default Categories
