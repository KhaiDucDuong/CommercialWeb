import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader,
  CCol,
  CFormInput,
  CFormLabel,
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
import Select from 'react-select'

const Categories = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const [categorySelectedOptions, setCategorySelectedOptions] = useState()

  const categoryList = [
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

  function handleCategorySelect(data) {
    setCategorySelectedOptions(data)
  }

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <CRow className="d-flex flex-row align-items-center">
          <CCol xs={6} sm={6} lg={6} className="justify-content-center">
            <h3 className="mb-0">Categories Management</h3>
          </CCol>
          <CCol xs={6} sm={6} lg={6} className="text-end">
            <CButton color="info">
              <Link to="/categories" style={{ textDecoration: 'none' }}>
                <h4 className="mb-0" style={{ color: 'white' }}>
                  Add a new category
                </h4>
              </Link>
            </CButton>
          </CCol>
        </CRow>
      </CCardHeader>
      <CCardBody>
        <CRow className="mb-3">
          <CFormLabel htmlFor="CategoryNameInput" className="col-sm-2 col-form-label">
            Category Name
          </CFormLabel>
          <CCol sm={10}>
            <Select
              aria-label="CategoryNameInput"
              options={categoryList}
              placeholder="Select Category names"
              value={categorySelectedOptions}
              onChange={handleCategorySelect}
              isSearchable={true}
            />
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
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}

export default Categories
