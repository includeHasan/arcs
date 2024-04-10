import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#000000',
  },
  sectionHeading: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#334155',
  },
  label: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#334155',
  },
  input: {
    fontSize: 10,
    padding: 2,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 4,
    color: '#334155',
  },
  textarea: {
    fontSize: 10,
    padding: 2,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 4,
    color: '#334155',
    height: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginBottom: 8,
  },
  column: {
    flex: 1,
    marginRight: 8,
  },
  stampSection: {
    alignSelf: 'flex-end',
    borderWidth: 2,
    borderColor: '#D1D5DB',
    padding: 8,
    marginTop: 16,
  },
  stampSectionHeading: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  stamp: {
    width: 32,
    height: 32,
    backgroundColor: '#D1D5DB',
  },
});

// Create Document Component
const MyDocument = ({ detail }) => (
  <Document>
    <Page size="A2" style={styles.page}>
      <Text style={styles.heading}>Lokmanya Tilak College of Engineering</Text>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.sectionHeading}>Student Information</Text>
          <View style={{ marginBottom: 4 }}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.input}>{detail.student.Name}</Text>
          </View>
          <View style={{ marginBottom: 4 }}>
            <Text style={styles.label}>ERP No.:</Text>
            <Text style={styles.input}>{detail.student.erp_no}</Text>
          </View>
          <View style={{ marginBottom: 4 }}>
            <Text style={styles.label}>Date of Birth:</Text>
            <Text style={styles.input}>{new Date(detail.student.dob).toLocaleDateString()}</Text>
          </View>
          <View style={{ marginBottom: 4 }}>
            <Text style={styles.label}>Gender:</Text>
            <Text style={styles.input}>{detail.student.gender}</Text>
          </View>
          <View style={{ marginBottom: 4 }}>
            <Text style={styles.label}>Fees Status:</Text>
            <Text style={styles.input}>{detail.student.fees_status}</Text>
          </View>
          <View style={{ marginBottom: 4 }}>
            <Text style={styles.label}>Academic Status:</Text>
            <Text style={styles.input}>{detail.student.academic_status}</Text>
          </View>
        </View>
        <View style={styles.column}>
          <Text style={styles.sectionHeading}>Contact Information</Text>
          <View style={{ marginBottom: 4 }}>
            <Text style={styles.label}>Phone No.:</Text>
            <Text style={styles.input}>{detail.student.phone_no}</Text>
          </View>
          <View style={{ marginBottom: 4 }}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.input}>{detail.student.email}</Text>
          </View>
          <View style={{ marginBottom: 4 }}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.textarea}>{detail.student.address}</Text>
          </View>
        </View>
        <View style={styles.column}>
          <Text style={styles.sectionHeading}>Academic Information</Text>
          <View style={{ marginBottom: 4 }}>
            <Text style={styles.label}>College Year:</Text>
            <Text style={styles.input}>{detail.student.college_year}</Text>
          </View>
          <View style={{ marginBottom: 4 }}>
            <Text style={styles.label}>Class:</Text>
            <Text style={styles.input}>{detail.student.class}</Text>
          </View>
          <View style={{ marginBottom: 4 }}>
            <Text style={styles.label}>Roll No.:</Text>
            <Text style={styles.input}>{detail.student.rollNo}</Text>
          </View>
          <View style={{ marginBottom: 4 }}>
            <Text style={styles.label}>Aadhar Card No.:</Text>
            <Text style={styles.input}>{detail.student.aadhar_card_no}</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.sectionHeading}>Travel Information</Text>
        <View style={{ marginBottom: 4 }}>
          <Text style={styles.label}>Destination:</Text>
          <Text style={styles.input}>{detail.destination}</Text>
        </View>
        <View style={{ marginBottom: 4 }}>
          <Text style={styles.label}>Class:</Text>
          <Text style={styles.input}>{detail.className}</Text>
        </View>
        <View style={{ marginBottom: 4 }}>
          <Text style={styles.label}>Duration:</Text>
          <Text style={styles.input}>{detail.duration}</Text>
        </View>
        <View style={{ marginBottom: 4 }}>
          <Text style={styles.label}>Line:</Text>
          <Text style={styles.input}>{detail.line}</Text>
        </View>
      </View>
      <View style={styles.stampSection}>
        <Text style={styles.stampSectionHeading}>Stamp Section</Text>
        <View style={styles.stamp} />
      </View>
    </Page>
  </Document>
);

export default MyDocument;