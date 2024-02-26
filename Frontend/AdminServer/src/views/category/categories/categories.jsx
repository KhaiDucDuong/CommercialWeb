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
              <Link to="/categories/create-category" style={{ textDecoration: 'none' }}>
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

        <CRow className="mb-3">
          <CFormLabel htmlFor="CategoryStatusInput" className="col-sm-2 col-form-label">
            Status
          </CFormLabel>
          <CCol sm={10}>
            <CFormSelect aria-label="CategoryStatusInput">
              <option value="0">Active</option>
              <option value="1">Deleted</option>
            </CFormSelect>
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
              <CTableHeaderCell scope="col">Created At</CTableHeaderCell>
              <CTableHeaderCell scope="col">Updated At</CTableHeaderCell>
              <CTableHeaderCell scope="col">Status</CTableHeaderCell>
              <CTableHeaderCell scope="col">Total No Products</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>Phone</CTableDataCell>
              <CTableDataCell>21/01/2024</CTableDataCell>
              <CTableDataCell>21/01/2024</CTableDataCell>
              <CTableDataCell>Active</CTableDataCell>
              <CTableDataCell>21</CTableDataCell>
            </CTableRow>

            <CTableRow>
              <CTableHeaderCell scope="row">2</CTableHeaderCell>
              <CTableDataCell>Laptop</CTableDataCell>
              <CTableDataCell>21/01/2024</CTableDataCell>
              <CTableDataCell>21/01/2024</CTableDataCell>
              <CTableDataCell>Active</CTableDataCell>
              <CTableDataCell>7</CTableDataCell>
            </CTableRow>

            <CTableRow>
              <CTableHeaderCell scope="row">3</CTableHeaderCell>
              <CTableDataCell>Book</CTableDataCell>
              <CTableDataCell>21/01/2024</CTableDataCell>
              <CTableDataCell>21/01/2024</CTableDataCell>
              <CTableDataCell>Active</CTableDataCell>
              <CTableDataCell>102</CTableDataCell>
            </CTableRow>

            <CTableRow>
              <CTableHeaderCell scope="row">4</CTableHeaderCell>
              <CTableDataCell>Car</CTableDataCell>
              <CTableDataCell>21/01/2024</CTableDataCell>
              <CTableDataCell>21/01/2024</CTableDataCell>
              <CTableDataCell>Deleted</CTableDataCell>
              <CTableDataCell>3</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}

export default Categories
